import { useMemo } from "react";

export function useLocalGallery() {
  const photos = useMemo(() => {
    // Aquí podrías hacer un listado manual o predefinido:
    const filenames = [
      "image1.jpg",
      "image2.png",
      // ...lista manual de imágenes
    ];

    const items = filenames.map((filename) => {
      const title = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      return {
        id: filename,
        title,
        description: "",
        image_url: `/gallery/${filename}`,  // URL público
        created_at: new Date().toISOString(),
      };
    });

    items.sort((a, b) => a.title.localeCompare(b.title));
    return items;
  }, []);

  return photos;
}
