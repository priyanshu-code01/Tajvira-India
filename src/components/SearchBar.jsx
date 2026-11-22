import { useState } from "react";
import { MapPin, Footprints, Bike, Clock3, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const easePremium = [0.22, 1, 0.36, 1];

// Custom Dropdown
const CustomDropdown = ({
  icon: Icon,
  placeholder,
  options,
  value,
  onChange,
  index = 0,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: easePremium,
      }}
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      {/* Dropdown Button */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.98 }}
        aria-expanded={open}
        className={`
          flex h-12.5 w-full
          items-center justify-between
          rounded-[11px]
          border
          ${open ? "border-[#df3044] ring-2 ring-red-100" : "border-[#d5e2ce]"}
          bg-white
          px-3.5
          text-left
          cursor-pointer
          transition-all duration-300
          hover:border-[#b8cfaa]
          focus:outline-none
        `}
      >
        <span className="flex min-w-0 items-center gap-3">
          <Icon size={18} strokeWidth={2} className="shrink-0 text-[#df3044]" />

          <span className="truncate text-[14px] text-[#303030] sm:text-[15px]">
            {value || placeholder}
          </span>
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easePremium }}
          className="ml-2 shrink-0 text-[#333333]"
        >
          <ChevronDown size={17} />
        </motion.span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.97,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.98,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.25,
              ease: easePremium,
            }}
            className="
              absolute left-0 bottom-full z-[100]
              mb-2 w-full origin-bottom
            "
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
              {options.map((option, index) => (
                <motion.button
                  key={option}
                  type="button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.035,
                    ease: easePremium,
                  }}
                  onClick={() => handleSelect(option)}
                  whileHover={{ x: 4 }}
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
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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

    const phone = "918218462981";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <motion.form
      id="trip-search"
      onSubmit={handleSearch}
      initial={{
        opacity: 0,
        y: 55,
        scale: 0.97,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: easePremium,
      }}
      className="
        mx-auto grid w-full
        max-w-[1380px]
        grid-cols-1
        gap-3
        rounded-xl
        border border-white/60
        bg-white/90
        p-4
        shadow-[0_20px_60px_rgba(0,0,0,0.20)]
        backdrop-blur-xl
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
        index={0}
      />

      {/* Trip Types */}
      <CustomDropdown
        icon={Footprints}
        placeholder="Trip Types"
        value={tripType}
        onChange={setTripType}
        options={["Family Tour", "Couple Tour", "Group Tour", "Solo Tour"]}
        index={1}
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
        index={2}
      />

      {/* Duration */}
      <CustomDropdown
        icon={Clock3}
        placeholder="3 Hours - 15 Days"
        value={duration}
        onChange={setDuration}
        options={["3 Hours", "1 Day", "2-3 Days", "4-7 Days", "8-15 Days"]}
        index={3}
      />

      {/* Search Button */}
      <motion.button
        type="submit"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: easePremium,
        }}
        whileHover={{
          y: -3,
          scale: 1.04,
          boxShadow: "0px 10px 25px rgba(223,48,68,0.3)",
        }}
        whileTap={{ scale: 0.96 }}
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
          transition-colors duration-300
          hover:bg-[#bd2035]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-red-400
          focus-visible:ring-offset-2
        "
      >
        Search
      </motion.button>
    </motion.form>
  );
};

export default SearchBar;
