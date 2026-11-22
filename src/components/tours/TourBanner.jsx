import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const TourBanner = ({ tour }) => {
  if (!tour) return null;

  return (
    <section
      className="
      relative flex h-[360px] items-center
      justify-center overflow-hidden pt-20
      sm:h-[420px]
    "
    >
      {/* Background Image */}
      <img
        src="/images/tours/common-camel-banner.jpg"
        alt="Indian desert camel journey"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Banner Content */}
      <div
        className="
        relative z-10 mx-auto w-full
        max-w-[1250px] px-5 text-center
      "
      >
        {/* Breadcrumb */}
        <div
          className="
          mb-6 flex flex-wrap items-center
          justify-center gap-2 text-sm text-white
        "
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-yellow-400"
          >
            <Home size={15} />
            Home
          </Link>

          {tour.breadcrumb?.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <ChevronRight size={15} />
              {item}
            </span>
          ))}

          <ChevronRight size={15} />
          <span>{tour.title}</span>
        </div>

        {/* Tour Title */}
        <h1
          className="
          mx-auto max-w-5xl font-serif
          text-3xl font-semibold leading-tight
          text-white sm:text-4xl lg:text-5xl
        "
        >
          {tour.title}
        </h1>
      </div>
    </section>
  );
};

export default TourBanner;
