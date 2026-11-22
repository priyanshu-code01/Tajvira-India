import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const TourItinerary = ({ itinerary = [] }) => {
  const [expandedDays, setExpandedDays] = useState([]);

  const toggleDay = (index) => {
    setExpandedDays((prev) =>
      prev.includes(index)
        ? prev.filter((day) => day !== index)
        : [...prev, index],
    );
  };

  const allExpanded =
    itinerary.length > 0 && expandedDays.length === itinerary.length;

  const toggleAll = () => {
    setExpandedDays(allExpanded ? [] : itinerary.map((_, index) => index));
  };

  if (!itinerary.length) return null;

  return (
    <section id="itinerary" className="scroll-mt-24 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-serif text-3xl font-bold text-gray-900">
          Tour Itinerary
        </h2>

        <button
          type="button"
          onClick={toggleAll}
          className="text-sm font-semibold text-[#e83248] hover:underline"
        >
          {allExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="space-y-4">
        {itinerary.map((day, index) => {
          const isExpanded = expandedDays.includes(index);

          return (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <button
                type="button"
                onClick={() => toggleDay(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">{day.title}</span>

                {isExpanded ? (
                  <ChevronUp className="shrink-0 text-[#e83248]" />
                ) : (
                  <ChevronDown className="shrink-0 text-gray-500" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-gray-200 px-5 py-4">
                  {Array.isArray(day.description) ? (
                    <ul className="space-y-3">
                      {day.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-sm leading-7 text-gray-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e83248]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-7 text-gray-600">
                      {day.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TourItinerary;
