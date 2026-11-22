import { Check, X } from "lucide-react";

const TourCost = ({ includes = [], excludes = [] }) => {
  if (!includes.length && !excludes.length) return null;

  return (
    <section id="cost" className="scroll-mt-24 py-10">
      <h2 className="mb-7 font-serif text-3xl font-bold text-gray-900">
        Tour Cost
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Cost Includes */}
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="mb-5 font-serif text-xl font-bold text-gray-900">
            Cost Includes
          </h3>

          <ul className="space-y-4">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check size={19} className="mt-1 shrink-0 text-green-600" />
                <span className="text-sm leading-6 text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cost Excludes */}
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="mb-5 font-serif text-xl font-bold text-gray-900">
            Cost Excludes
          </h3>

          <ul className="space-y-4">
            {excludes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <X size={19} className="mt-1 shrink-0 text-red-500" />
                <span className="text-sm leading-6 text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TourCost;
