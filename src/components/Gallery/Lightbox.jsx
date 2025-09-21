import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription
} from "@/ui/dialog";
import { Button } from "@/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Share2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { logger } from "@/lib/logger";

export function Lightbox({ photos, currentIndex, isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    setScale(1);
    setRotation(0);
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        goToPrevious();
        break;
      case "ArrowRight":
        goToNext();
        break;
      case "Escape":
        onClose();
        break;
      case "+":
      case "=":
        handleZoomIn();
        break;
      case "-":
        handleZoomOut();
        break;
      case "r":
      case "R":
        handleRotate();
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!photos.length) return null;

  const currentPhoto = photos[activeIndex];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentPhoto.image_url;
    link.download = `chairfix-${currentPhoto.title || "image"}.jpg`;
    link.click();
    toast({
      title: "Download iniciado!",
      description: "O arquivo está sendo baixado.",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentPhoto.title || "ChairFix Gallery",
          text: currentPhoto.description || "Restauração profissional de cadeiras",
          url: currentPhoto.image_url,
        });
      } catch (error) {
        logger.debug("Share cancelled", "Lightbox");
      }
    } else {
      navigator.clipboard.writeText(currentPhoto.image_url);
      toast({
        title: "Link copiado!",
        description: "O link foi copiado para a área de transferência.",
      });
    }
  };

  const nextImage = () => {
    if (activeIndex < photos.length - 1) {
      setActiveIndex(activeIndex + 1);
      setScale(1);
      setRotation(0);
    }
  };

  const previousImage = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setScale(1);
      setRotation(0);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-full p-0 bg-background/95 border-0 text-foreground">
        <DialogTitle className="sr-only">{currentPhoto.title || "Imagem da galeria"}</DialogTitle>
        <DialogDescription className="sr-only">
          {currentPhoto.description || "Visualização da imagem em tela cheia"}
        </DialogDescription>

        <div className="relative w-full h-full flex flex-col">
          {/* Header Controls */}
          <div className="flex items-center justify-between p-4 bg-background/50 backdrop-blur-sm border-b border-border">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                {activeIndex + 1} / {photos.length}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent" onClick={handleDownload}>
                <Download className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent" onClick={handleRotate}>
                <RotateCw className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent" onClick={() => setScale((prev) => Math.min(prev + 0.2, 3))}>
                <ZoomIn className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-accent" onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}>
                <ZoomOut className="h-4 w-4" />
              </Button>

              <DialogClose asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  {/* <X className="h-4 w-4" /> */}
                </Button>
              </DialogClose>
            </div>
          </div>

          {/* Main Image Area */}
          <div
            className="flex-1 border-2 border-blue-500 relative overflow-hidden flex items-center justify-center bg-background"
            style={{ minHeight: "60vh" }}
          >
            {photos.length > 0 && (
              <>
                <div
                  className="relative transition-all duration-300 ease-out select-none flex items-center justify-center"
                  style={{
                    transform: `scale(${scale}) rotate(${rotation}deg)`,
                    transformOrigin: "center center",
                    width: "80%", // Limita el ancho de la imagen al 80% del contenedor
                    height: "auto",
                  }}
                >
                  <img
                    src={currentPhoto.image_url}
                    alt={currentPhoto.title || "Imagem da galeria"}
                    className="max-h-[70vh] w-full object-contain"
                    draggable={false}
                  />
                </div>

                {photos.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm hidden md:flex items-center justify-center"
                      onClick={previousImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm hidden md:flex items-center justify-center"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-t from-background/90 to-transparent p-4 border-t border-border">
            <h3 className="font-semibold text-lg mb-2">{currentPhoto.title || "Projeto ChairFix"}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {currentPhoto.description || "Restauração profissional de cadeiras de barbeiro"}
            </p>

            <div className="flex md:hidden gap-2 justify-center">
              <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>

              <Button variant="ghost" size="sm" className="flex-1 hover:bg-accent" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-1" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
