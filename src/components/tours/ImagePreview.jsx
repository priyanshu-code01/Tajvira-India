
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ImagePreview = ({
  images = [],
  activeIndex,
  title = "Tour",
  onClose,
  onPrevious,
  onNext,
}) => {
  const isOpen = activeIndex !== null && activeIndex !== undefined;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrevious?.();
      if (e.key === "ArrowRight") onNext?.();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !images.length || !images[activeIndex]) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute right-5 top-5 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#e83248] sm:right-8 sm:top-8"
      >
        <X size={25} />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious?.();
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-[#e83248] sm:left-8 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      <div
        className="flex h-full w-full max-w-[1200px] flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[activeIndex]}
          alt={`${title} image ${activeIndex + 1}`}
          className="max-h-[78vh] max-w-full rounded-lg object-contain"
        />

        <p className="mt-5 text-sm font-medium text-white/80">
          {activeIndex + 1} / {images.length}
        </p>
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-[#e83248] sm:right-8 sm:h-12 sm:w-12"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
};

export default ImagePreview;
