"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/ui/card";
import { Button } from "@/ui/button";
import { useTranslations } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";
import { Camera, Plus } from "lucide-react";
import { Lightbox } from "./Gallery/Lightbox";
import { useLocalGallery } from "@/hooks/useLocalGallery";
import { logger } from "@/lib/logger";

export function PublicGallery() {
  const { gallery } = useTranslations();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const localPhotos = useLocalGallery();

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      try {
        const attempts = [
          { name: 'list-galeria-fotos', body: undefined },
          { name: 'list-gallery-images', body: { bucket: 'Galeria de fotos' } },
          { name: 'list-gallery-images', body: { bucket: 'Galeria' } },
          { name: 'list-gallery-images', body: { bucket: 'Galeria de fotos', prefix: 'gallery' } },
          { name: 'list-gallery-images', body: { bucket: 'Galeria de fotos', prefix: 'fotos' } },
          { name: 'list-gallery-images', body: { bucket: 'Galeria de fotos', prefix: 'images' } },
        ];

        for (const attempt of attempts) {
          const args = attempt.body ? { body: attempt.body } : {};
          const { data, error } = await supabase.functions.invoke(attempt.name, args);
          if (!error && data?.success && data.files && data.files.length > 0) {
            const mapped = data.files
              .filter(f => f?.publicUrl || f?.signedUrl)
              .map(f => ({
                id: f.name,
                title: (f.name || '').replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
                description: `Trabajo profesional de reforma de sillas`,
                image_url: f.publicUrl || f.signedUrl,
                created_at: f.updated_at || new Date().toISOString(),
              }));
            if (mapped.length > 0) {
              setPhotos(mapped);
              logger.info('Galeria carregada via Edge Function', 'PublicGallery', { fn: attempt.name, count: mapped.length });
              return;
            }
          }
        }
      } catch (edgeError) {
        console.debug('Edge functions para Galeria não disponíveis');
      }

      const candidates = ["Galeria de fotos", "Galeria", "galeria", "gallery-images", "gallery"];
      let resolvedBucket = null;
      let files = [];
      let prefix = "";

      for (const name of candidates) {
        const { data: inRoot, error: inRootErr } = await supabase.storage
          .from(name)
          .list("", { limit: 100, sortBy: { column: "name", order: "desc" } });

        if (!inRootErr && (inRoot?.length ?? 0) > 0) {
          const imageFiles = inRoot?.filter(f =>
            f.name &&
            !f.name.startsWith('.') &&
            f.name !== 'placeholder.txt' &&
            /\.(jpg|jpeg|png|webp|gif)$/i.test(f.name)
          ) || [];

          if (imageFiles.length > 0) {
            resolvedBucket = name;
            files = imageFiles;
            prefix = "";
            break;
          }
        }

        const commonFolders = ["gallery", "fotos", "Fotos", "images", "imagens", "imagenes", "Galeria", "galeria"];
        const discoveredFolders = (inRoot || [])
          .filter(f => f?.name && !/\.(jpg|jpeg|png|webp|gif)$/i.test(f.name))
          .map(f => f.name);

        const folderCandidates = Array.from(new Set([...commonFolders, ...discoveredFolders]));

        for (const folder of folderCandidates) {
          const { data: inFolder, error: inFolderErr } = await supabase.storage
            .from(name)
            .list(folder, { limit: 1000, sortBy: { column: "name", order: "desc" } });

          if (!inFolderErr && (inFolder?.length ?? 0) > 0) {
            const imageFiles = inFolder?.filter(f =>
              f.name &&
              !f.name.startsWith('.') &&
              f.name !== 'placeholder.txt' &&
              /\.(jpg|jpeg|png|webp|gif)$/i.test(f.name)
            ) || [];

            if (imageFiles.length > 0) {
              resolvedBucket = name;
              files = imageFiles;
              prefix = `${folder}/`;
              logger.debug('Galeria: bucket e pasta detectados', 'PublicGallery', { bucket: name, folder });
              break;
            }
          }
        }
      }

      if (!resolvedBucket || files.length === 0) {
        setPhotos([]);
        return;
      }

      const mapped = files.map(f => {
        const { data: { publicUrl } } = supabase.storage
          .from(resolvedBucket)
          .getPublicUrl(`${prefix}${f.name}`);
        return {
          id: f?.id ?? f?.name,
          title: f?.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ") || "Trabalho de reforma",
          description: 'Trabalho profissional de reforma de sillas',
          image_url: publicUrl,
          created_at: f?.updated_at ?? f?.created_at ?? new Date().toISOString(),
        };
      });

      setPhotos(mapped);
    } catch (error) {
      console.error('Error loading photos:', error);
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const sourcePhotos = photos.length > 0 ? photos : localPhotos;
  const displayedPhotos = showAllPhotos ? sourcePhotos : sourcePhotos.slice(0, 4);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section id="galeria" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {gallery.title}
          </h2>
          <p className="text-white text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {gallery.subtitle}
          </p>
        </div>

        {sourcePhotos.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">{gallery.noPhotos}</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onClick={() => openLightbox(showAllPhotos ? index : sourcePhotos.findIndex(p => p.id === photo.id))}
                >
                  <div className="aspect-square">
                    <img
                      src={photo.image_url}
                      alt={photo.title || 'Foto da galeria'}
                      loading="lazy"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-foreground">
                      <h3 className="font-semibold text-sm mb-1 text-white">{photo.title}, </h3>
                      {photo.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {photo.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sourcePhotos.length > 4 && (
              <div className="text-white text-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  className="gap-2"
                >
                  {showAllPhotos ? (
                    <>Mostrar menos</>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      Más fotos ({sourcePhotos.length - 4} más)
                    </>
                  )}
                </Button>
              </div>
            )}

            <Lightbox
              photos={sourcePhotos}
              currentIndex={lightboxIndex}
              isOpen={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
            />
          </>
        )}
      </div>
    </section>
  );
}
