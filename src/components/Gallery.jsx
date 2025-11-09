"use client";
import { useEffect, useState } from "react";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`${BASEURL}/photo`);
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error al cargar las fotos:", error);
      }
    };
    fetchPhotos();
  }, []);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  return (
    <div className="text-center py-10 bg-gray-900 text-white">
      {/* Título principal */}
      <h2 className="text-3xl font-bold mb-2">Galería de Trabajos</h2>
      <p className="mb-8 text-gray-300">
        Vea algunos de nuestros trabajos realizados
      </p>

      {/* Galería de fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {photos.slice(0, visibleCount).map((photo, index) => (
          <div
            key={photo.id}
            className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition group"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={photo.images}
              alt={photo.name}
              className="w-full h-64 object-cover"
            />
            {/* Overlay con título y descripción */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center p-3 text-center">
              <h3 className="text-lg font-bold">{photo.name}</h3>
              <p className="text-sm text-gray-300 mt-1">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón para cargar más fotos */}
      {visibleCount < photos.length && (
        <button
          onClick={handleLoadMore}
          className="mt-6 px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition"
        >
          + Más fotos
        </button>
      )}

      {/* Modal de imagen expandida (responsivo) */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative flex items-center justify-center w-full max-w-5xl">
            {/* Botón anterior */}
            <button
              onClick={handlePrev}
              className="absolute left-0 text-white text-4xl px-3 md:px-6 hover:text-gray-400 z-10"
            >
              ❮
            </button>

            {/* Imagen principal responsiva */}
            <img
              src={photos[selectedIndex].images}
              alt={photos[selectedIndex].name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
            />

            {/* Botón siguiente */}
            <button
              onClick={handleNext}
              className="absolute right-0 text-white text-4xl px-3 md:px-6 hover:text-gray-400 z-10"
            >
              ❯
            </button>
          </div>

          {/* Botón de cierre */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
