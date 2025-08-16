import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const ImageSlider = ({ images = [], title = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full aspect-[16/9]  overflow-hidden rounded-t-2xl flex items-center justify-center p-4">
      <img
        src={images[currentIndex]}
        alt={`${title} image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />

      {/* Title */}
      <div className="absolute bottom-6 left-6 right-16 z-20">
        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
          {title}
        </h3>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};
