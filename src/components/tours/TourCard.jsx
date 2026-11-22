import { Link } from "react-router-dom";
import { Clock3, MapPin, ArrowRight } from "lucide-react";

const TourCard = ({ tour }) => {
  if (!tour) return null;

  const image = tour.gallery?.[0] || tour.image;

  return (
    <Link
      to={`/tours/${tour.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-medium text-white">
          <MapPin size={16} />
          <span>{tour.location}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-2 font-serif text-xl font-bold text-gray-900 transition-colors group-hover:text-[#e83248]">
          {tour.title}
        </h3>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <Clock3 size={16} />
            {tour.duration}
          </span>

          <span className="flex items-center gap-2 text-sm font-semibold text-[#e83248]">
            Explore
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
