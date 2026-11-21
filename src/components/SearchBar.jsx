import { useState } from "react";
import { MapPin, Footprints, Bike, Clock3, ChevronDown } from "lucide-react";

// Custom Dropdown
const CustomDropdown = ({
  icon: Icon,
  placeholder,
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="
          flex h-12.5 w-full
          items-center justify-between
          rounded-[11px]
          border border-[#d5e2ce]
          bg-white
          px-3.5
          text-left
          cursor-pointer
          transition-all duration-200
          hover:border-[#b8cfaa]
          focus:border-red-500
          focus:outline-none
          focus:ring-2 focus:ring-red-100
        "
      >
        <span className="flex min-w-0 items-center gap-3">
          <Icon size={18} strokeWidth={2} className="shrink-0 text-[#df3044]" />

          <span className="truncate text-[14px] sm:text-[15px] text-[#303030]">
            {value || placeholder}
          </span>
        </span>

        <ChevronDown
          size={17}
          className={`
            ml-2 shrink-0 text-[#333333]
            transition-transform duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute left-0 bottom-full z-100
          mb-2 w-full
          origin-bottom
          transition-all duration-200 ease-out
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible translate-y-2 scale-[0.98] opacity-0"
          }
        `}
      >
        <div
          className="
            overflow-hidden
            rounded-[13px]
            border border-gray-100
            bg-white
            p-2.5
            shadow-[0_12px_35px_rgba(0,0,0,0.15)]
          "
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`
                my-0.75
                flex min-h-11
                w-full items-center
                rounded-[10px]
                px-4 py-3
                text-left
                text-[14px]
                font-medium
                cursor-pointer
                transition-colors duration-200
                ${
                  value === option
                    ? "bg-[#f1f1f6] text-[#df3044]"
                    : "bg-white text-[#292929] hover:bg-[#f1f1f6] hover:text-[#df3044]"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const message = `Hello, I am interested in a tour package.

Destination: ${destination || "Any"}
Trip Type: ${tripType || "Any"}
Activity: ${activity || "Any"}
Duration: ${duration || "Any"}

Please share available tour packages.`;

    const phone = "919876543210";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      id="trip-search"
      onSubmit={handleSearch}
      className="
        mx-auto grid w-full
        max-w-345
        grid-cols-1
        gap-3
        rounded-xl
        bg-white
        p-3 py-4
        shadow-2xl
        sm:grid-cols-2
        sm:gap-4
        sm:p-5
        md:p-6
        lg:grid-cols-2
        lg:p-9
        xl:grid-cols-[repeat(4,minmax(0,1fr))_120px]
        xl:items-center
        xl:gap-2.5
        xl:px-11
        xl:py-11
      "
    >
      {/* Destination */}
      <CustomDropdown
        icon={MapPin}
        placeholder="Destination"
        value={destination}
        onChange={setDestination}
        options={["Agra", "Jaipur", "Delhi", "Varanasi", "Rajasthan", "Kerala"]}
      />

      {/* Trip Types */}
      <CustomDropdown
        icon={Footprints}
        placeholder="Trip Types"
        value={tripType}
        onChange={setTripType}
        options={["Family Tour", "Couple Tour", "Group Tour", "Solo Tour"]}
      />

      {/* Activity */}
      <CustomDropdown
        icon={Bike}
        placeholder="Activity"
        value={activity}
        onChange={setActivity}
        options={[
          "Sightseeing",
          "Adventure",
          "Wildlife",
          "Heritage Tour",
          "Photography",
        ]}
      />

      {/* Duration */}
      <CustomDropdown
        icon={Clock3}
        placeholder="3 Hours - 15 Days"
        value={duration}
        onChange={setDuration}
        options={["3 Hours", "1 Day", "2-3 Days", "4-7 Days", "8-15 Days"]}
      />

      {/* Search Button */}
      <button
        type="submit"
        className="
          flex h-12.5 w-full
          items-center justify-center
          rounded-[11px]
          bg-[#df3044]
          px-6
          text-[15px]
          font-semibold
          text-white
          shadow-sm
          cursor-pointer
          transition-all duration-300
          hover:bg-[#bd2035]
          hover:shadow-md
          active:scale-[0.97]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-red-400
          focus-visible:ring-offset-2
        "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
