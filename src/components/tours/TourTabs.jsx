import { useState } from "react";

const TourTabs = ({ tabs, activeTab, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(activeTab || "Overview");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex gap-7 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`shrink-0 border-b-2 px-1 py-4 text-sm font-semibold transition-colors ${
              selectedTab === tab
                ? "border-[#e83248] text-[#e83248]"
                : "border-transparent text-gray-600 hover:text-[#e83248]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TourTabs;
