import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedTrips = ({ tours = [] }) => {
  if (!tours.length) return null;

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="mb-5 font-serif text-xl font-bold text-gray-900">
        Featured Trips
      </h2>

      <div className="space-y-5">
        {tours.map((tour) => (
          <Link
            key={tour.id}
            to={`/tours/${tour.slug}`}
            className="group flex items-center gap-4"
          >
            <img
              src={tour.gallery?.[0] || tour.image}
              alt={tour.title}
              className="h-20 w-24 shrink-0 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 font-semibold text-gray-900 transition-colors group-hover:text-[#e83248]">
                {tour.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">{tour.duration}</p>

              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#e83248]">
                View Details
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrips;
