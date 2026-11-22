import { useEffect, useState } from "react";
import { Images, ChevronLeft, ChevronRight, X } from "lucide-react";

const TourGallery = ({ images = [], title = "Tour" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const hasImages = images.length > 0;
  const isOpen = activeIndex !== null;

  const closeSlider = () => setActiveIndex(null);

  const showPrevious = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeSlider();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  if (!hasImages) return null;

  return (
    <>
      {/* Gallery Grid */}
      <div
        className="
        grid h-auto grid-cols-2 gap-2
        overflow-hidden rounded-xl
        lg:h-[555px] lg:grid-cols-3 lg:grid-rows-2
      "
      >
        {/* Main Large Image */}
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="
            col-span-2 h-[300px] overflow-hidden
            rounded-lg lg:col-span-1
            lg:row-span-2 lg:h-full
          "
        >
          <img
            src={images[0]}
            alt={`${title} gallery 1`}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              hover:scale-105
            "
          />
        </button>

        {/* Top Wide Image */}
        {images[1] && (
          <button
            type="button"
            onClick={() => setActiveIndex(1)}
            className="
              col-span-2 h-[220px]
              overflow-hidden rounded-lg lg:h-full
            "
          >
            <img
              src={images[1]}
              alt={`${title} gallery 2`}
              className="
                h-full w-full object-cover
                transition-transform duration-500
                hover:scale-105
              "
            />
          </button>
        )}

        {/* Bottom Left Image */}
        {images[2] && (
          <button
            type="button"
            onClick={() => setActiveIndex(2)}
            className="
              relative h-[180px]
              overflow-hidden rounded-lg lg:h-full
            "
          >
            <img
              src={images[2]}
              alt={`${title} gallery 3`}
              className="
                h-full w-full object-cover
                transition-transform duration-500
                hover:scale-105
              "
            />
          </button>
        )}

        {/* Bottom Right Image */}
        {images[3] && (
          <button
            type="button"
            onClick={() => setActiveIndex(3)}
            className="
              relative h-[180px]
              overflow-hidden rounded-lg lg:h-full
            "
          >
            <img
              src={images[3]}
              alt={`${title} gallery 4`}
              className="
                h-full w-full object-cover
                transition-transform duration-500
                hover:scale-105
              "
            />

            <span
              className="
              absolute bottom-3 right-3
              flex items-center gap-2
              rounded-full bg-white px-4 py-2
              text-sm font-semibold text-gray-800 shadow-md
            "
            >
              <Images size={16} />
              Gallery
            </span>
          </button>
        )}
      </div>

      {/* Full Screen Image Slider */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/95 p-4 sm:p-8
          "
          onClick={closeSlider}
        >
          {/* Single Close Button - Top Right */}
          <button
            type="button"
            onClick={closeSlider}
            aria-label="Close gallery"
            className="
              absolute right-5 top-5 z-[110]
              flex h-11 w-11 items-center
              justify-center rounded-full
              bg-white/15 text-white
              transition-colors hover:bg-[#e83248]
              sm:right-8 sm:top-8
            "
          >
            <X size={25} />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="
                absolute left-3 top-1/2 z-[110]
                flex h-11 w-11 -translate-y-1/2
                items-center justify-center
                rounded-full bg-white/15 text-white
                transition-colors hover:bg-[#e83248]
                sm:left-8 sm:h-12 sm:w-12
              "
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Active Image */}
          <div
            className="
              flex h-full w-full max-w-[1200px]
              flex-col items-center justify-center
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`${title} image ${activeIndex + 1}`}
              className="
                max-h-[78vh] max-w-full
                rounded-lg object-contain
              "
            />

            <p className="mt-5 text-sm font-medium text-white/80">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="
                absolute right-3 top-1/2 z-[110]
                flex h-11 w-11 -translate-y-1/2
                items-center justify-center
                rounded-full bg-white/15 text-white
                transition-colors hover:bg-[#e83248]
                sm:right-8 sm:h-12 sm:w-12
              "
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default TourGallery;
