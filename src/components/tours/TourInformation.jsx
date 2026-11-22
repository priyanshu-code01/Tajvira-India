import {
  Train,
  Building2,
  UserRound,
  Car,
  Wifi,
  Droplet,
  Footprints,
} from "lucide-react";

const TourInformation = ({ tour }) => {
  if (!tour) return null;

  const information = [
    { label: "Departure City", value: tour.departure, icon: Train },
    { label: "Arrival City", value: tour.arrival, icon: Building2 },
    { label: "Guide", value: tour.guide, icon: UserRound },
    { label: "Hotel Transfer", value: tour.hotelTransfer, icon: Building2 },
    { label: "Transportation", value: tour.transportation, icon: Car },
    { label: "Mineral Water", value: tour.mineralWater, icon: Droplet },
    { label: "Wifi", value: tour.wifi, icon: Wifi },
    { label: "Tour Availability", value: tour.availability, icon: Footprints },
  ];

  return (
    <section className="border-b border-gray-200 py-9">
      <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
        Information
      </h2>

      <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4">
        {information.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-3">
              <Icon className="shrink-0 text-[#e83248]" size={27} />

              <div className="min-w-0">
                <p className="text-sm text-gray-500">{item.label}</p>

                <p className="mt-1 break-words font-serif text-base font-semibold text-gray-900">
                  {item.value || "Not specified"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TourInformation;
