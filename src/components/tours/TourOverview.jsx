
const TourOverview = ({ tour }) => {
  if (!tour) return null;

  return (
    <section id="overview" className="scroll-mt-24 py-10">
      <h2 className="mb-5 font-serif text-3xl font-bold text-gray-900">
        Tour Overview
      </h2>

      {Array.isArray(tour.overview) ? (
        tour.overview.map((item, index) => (
          <p
            key={index}
            className="mb-4 text-base leading-8 text-gray-600"
          >
            {item}
          </p>
        ))
      ) : (
        <p className="text-base leading-8 text-gray-600">
          {tour.overview}
        </p>
      )}

      {tour.highlights?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 font-serif text-xl font-bold text-gray-900">
            Tour Highlights
          </h3>

          <ul className="space-y-3">
            {tour.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e83248]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TourOverview;
