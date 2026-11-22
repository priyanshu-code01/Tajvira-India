import { MapPin } from "lucide-react";

const TourMap = ({ mapQuery, title = "Tour Location" }) => {
  if (!mapQuery) return null;

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery,
  )}&output=embed`;

  return (
    <section id="map" className="scroll-mt-24 py-10">
      <div className="mb-6 flex items-center gap-3">
        <MapPin className="text-[#e83248]" size={27} />

        <h2 className="font-serif text-3xl font-bold text-gray-900">
          Tour Location
        </h2>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <iframe
          title={`${title} location map`}
          src={mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default TourMap;
