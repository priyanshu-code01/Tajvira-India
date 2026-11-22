import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import tours from "../data/tours";
import TourCard from "./TourCard";

const TourCarousel = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const headingText = "Best of 2026";

  // Scroll animation: up and down both
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter heading animation
  useEffect(() => {
    if (!isVisible) {
      setTypedText("");
      return;
    }

    setTypedText("");

    let index = 0;

    const typingInterval = setInterval(() => {
      index++;
      setTypedText(headingText.slice(0, index));

      if (index >= headingText.length) {
        clearInterval(typingInterval);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, [isVisible]);

  // Slide one card at a time
  const slide = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const card = slider.querySelector(".tour-card");

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (direction === 1 && slider.scrollLeft >= maxScroll - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else if (direction === -1 && slider.scrollLeft <= 5) {
      slider.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Automatic slider
  useEffect(() => {
    const autoSlide = setInterval(() => {
      slide(1);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="w-full overflow-hidden bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-9 text-center">
          <p className="mb-5 text-base font-semibold text-[#e83248]">
            Travellers Choice
          </p>

          <h2 className="font-serif text-4xl text-[#222222] sm:text-5xl">
            {typedText}
          </h2>

          <p className="mx-auto mt-5 max-w-[1150px] text-sm leading-6 text-gray-500 sm:text-base">
            Discover handpicked, private travel itineraries designed to give you
            unforgettable experiences across the subcontinent. From the timeless
            romance of the Taj Mahal to the vibrant, royal heritage of
            Rajasthan's forts and palaces – your authentic Indian adventure
            starts here.
          </p>
        </div>

        {/* Cards and Arrows */}
        <div className="relative mx-auto max-w-[1400px] px-0 lg:px-12">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => slide(-1)}
            aria-label="Previous tours"
            className="
              absolute left-0 top-1/2 z-20
              hidden h-10 w-10
              -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full bg-[#111827] text-white
              transition-all duration-300
              hover:scale-110 hover:bg-[#e83248]
              lg:flex cursor-pointer
            "
          >
            <ArrowLeft size={19} />
          </button>

          {/* Tour Slider */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-auto
              scroll-smooth snap-x snap-mandatory
              px-1 pb-4 pt-10
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {tours.map((tour, index) => (
              <Link
                key={tour.id}
                to={`/tours/${tour.slug}`}
                style={{
                  transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
                }}
                className={`
                  tour-card group mt-0 flex min-w-0 shrink-0
                  basis-full snap-start flex-col
                  transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }
                  sm:basis-[calc((100%-24px)/2)]
                  lg:basis-[calc((100%-48px)/3)]
                `}
              >
                <TourCard tour={tour} />
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => slide(1)}
            aria-label="Next tours"
            className="
              absolute right-0 top-1/2 z-20
              hidden h-10 w-10
              translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-full bg-[#111827] text-white
              transition-all duration-300
              hover:scale-110 hover:bg-[#e83248]
              lg:flex cursor-pointer
            "
          >
            <ArrowRight size={19} />
          </button>
        </div>

        {/* Mobile and Tablet Slide Buttons */}
        <div className="mt-5 flex justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => slide(-1)}
            aria-label="Previous tours"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-[#111827] text-white
              transition-colors hover:bg-[#e83248] cursor-pointer
            "
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => slide(1)}
            aria-label="Next tours"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full bg-[#111827] text-white
              transition-colors hover:bg-[#e83248] cursor-pointer
            "
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourCarousel;
