import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const TourFAQs = ({ faqs = [] }) => {
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const toggleFaq = (index) => {
    setExpandedFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const allExpanded = faqs.length > 0 && expandedFaqs.length === faqs.length;

  const toggleAll = () => {
    setExpandedFaqs(allExpanded ? [] : faqs.map((_, index) => index));
  };

  if (!faqs.length) return null;

  return (
    <section id="faqs" className="scroll-mt-24 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-serif text-3xl font-bold text-gray-900">
          Frequently Asked Questions
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
        {faqs.map((faq, index) => {
          const isExpanded = expandedFaqs.includes(index);

          return (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                {isExpanded ? (
                  <ChevronUp className="shrink-0 text-[#e83248]" />
                ) : (
                  <ChevronDown className="shrink-0 text-gray-500" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-gray-200 px-5 py-4">
                  <p className="text-sm leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TourFAQs;
