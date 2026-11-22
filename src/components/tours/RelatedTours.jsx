import TourCard from "../TourCard";

const RelatedTours = ({ tours = [], currentTourId }) => {
  const relatedTours = tours
    .filter((tour) => tour.id !== currentTourId)
    .slice(0, 3);

  if (!relatedTours.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
        Related trips you might be interested in
      </h2>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        {relatedTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default RelatedTours;
