import { MapPin, CalendarDays } from "lucide-react";

const TourCard = ({ tour }) => {
  return (
    <div
      className="
        group relative w-full
        rounded-[18px] border border-[#e5e7eb]
        bg-white p-4
        transition-shadow duration-300
        hover:shadow-lg
      "
    >
      {/* Tour Image */}
      <div
        className="
          relative -mt-9
          h-[250px] w-full
          overflow-hidden rounded-[9px]
          shadow-[0_14px_20px_-10px_rgba(0,0,0,0.35)]
        "
      >
        <img
          src={tour.gallery?.[0] || tour.image}
          alt={tour.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Bottom Blackish Gradient */}
        <div
          className="
            pointer-events-none absolute inset-x-0 bottom-0
            h-20
            bg-gradient-to-t
            from-black/30 via-black/10 to-transparent
          "
        />
      </div>

      {/* Card Content */}
      <div className="pt-6">
        {/* Location */}
        <div
          className="
            mb-4 flex items-center gap-2
            text-[14px] text-[#52647c]
          "
        >
          <MapPin size={18} strokeWidth={2} className="shrink-0" />
          <span>{tour.location}</span>
        </div>

        {/* Title */}
        <h3
          className="
            mb-5 font-serif
            text-[21px] font-bold
            leading-[1.5]
            text-[#172033]
            transition-colors duration-300
            group-hover:text-[#e83248]
          "
        >
          {tour.title}
        </h3>

        {/* Duration */}
        <div className="flex items-start gap-3 text-[#52647c]">
          <CalendarDays size={19} strokeWidth={1.7} className="mt-1 shrink-0" />

          <div>
            <p className="text-[14px]">Duration</p>

            <p className="mt-1 text-[14px] font-semibold text-[#34445d]">
              {tour.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
