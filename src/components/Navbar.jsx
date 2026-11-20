import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Detect mouse entry direction
const getHoverOrigin = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const distances = [
    { side: "left", value: x },
    { side: "right", value: rect.width - x },
    { side: "top", value: y },
    { side: "bottom", value: rect.height - y },
  ];

  const nearest = distances.reduce((a, b) => (a.value < b.value ? a : b));

  const origins = {
    left: "left center",
    right: "right center",
    top: "center top",
    bottom: "center bottom",
  };

  return origins[nearest.side];
};

// Plan My Trip button with directional red hover
const PlanMyTripButton = () => {
  const [origin, setOrigin] = useState("left center");

  return (
    <a
      href="#trip-search"
      onMouseEnter={(e) => setOrigin(getHoverOrigin(e))}
      className="group relative isolate inline-flex h-11 min-w-[140px] items-center justify-center overflow-hidden rounded-full border border-white/90 px-5 text-sm font-medium text-white transition-colors duration-300 hover:border-[#df3044] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 scale-0 rounded-full bg-[#df3044] transition-transform duration-300 ease-out group-hover:scale-100"
        style={{ transformOrigin: origin }}
      />

      <span className="relative z-10 whitespace-nowrap">Plan My Trip</span>
    </a>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    {
      name: "Packages",
      children: [
        { name: "Same Day Tours", href: "#packages" },
        { name: "Taj Mahal Tours", href: "#packages" },
        { name: "Golden Triangle Tours", href: "#packages" },
        { name: "Wildlife Tours", href: "#packages" },
        { name: "Spiritual Tours", href: "#packages" },
      ],
    },
    {
      name: "Destinations",
      children: [
        { name: "Agra", href: "#destinations" },
        { name: "Delhi", href: "#destinations" },
        { name: "Jaipur", href: "#destinations" },
        { name: "Mathura", href: "#destinations" },
        { name: "Ranthambore", href: "#destinations" },
        { name: "Udaipur", href: "#destinations" },
      ],
    },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      {/* Main Navbar */}
      <nav
        className="
          relative mx-auto grid
          h-[76px] w-full max-w-[1600px]
          grid-cols-[1fr_auto]
          items-center
          md:h-[84px]
          xl:h-[92px]
          xl:grid-cols-[190px_minmax(0,1fr)_150px]
        "
        style={{
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="
            relative z-10 flex w-fit
            max-w-[190px]
            flex-col justify-center
            leading-none
          "
        >
          <span
            className="
              whitespace-nowrap
              font-serif
              text-[25px]
              font-bold
              tracking-[-1.2px]
              text-[#f5b900]
              sm:text-[28px]
            "
          >
            Tajvira India Tours
          </span>

          <span
            className="
              mt-1 whitespace-nowrap
              font-serif text-[10px]
              italic tracking-wide
              text-white sm:text-[11px]
            "
          >
            Crafting memories, TAJVIRA style
          </span>
        </a>

        {/* Desktop Navigation */}
        <div
          className="
            hidden items-center justify-center
            gap-3 whitespace-nowrap
            xl:flex
            2xl:gap-5
          "
        >
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              {link.children ? (
                <>
                  {/* Dropdown Trigger */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="
                      flex items-center gap-1
                      rounded-md px-2 py-2
                      text-[14px] font-medium
                      text-white
                      transition-colors duration-200
                      hover:text-[#ffcf72]
                      focus-visible:outline-none
                      focus-visible:text-[#ffcf72]
                      2xl:text-[15px]
                    "
                  >
                    {link.name}

                    <ChevronDown
                      size={15}
                      className="
                        transition-transform duration-200
                        group-hover:rotate-180
                        group-focus-within:rotate-180
                      "
                    />
                  </button>

                  {/* Modern Dropdown Menu */}
                  <div
                    className="
    invisible absolute left-0 top-full
    z-50 translate-y-2 opacity-0
    transition-all duration-200 ease-out
    group-hover:visible
    group-hover:translate-y-0
    group-hover:opacity-100
    group-focus-within:visible
    group-focus-within:translate-y-0
    group-focus-within:opacity-100
  "
                    style={{
                      width: "260px",
                      paddingTop: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #eeeeee",
                        borderRadius: "12px",
                        boxShadow: "0 12px 35px rgba(0,0,0,0.16)",
                        boxSizing: "border-box",
                      }}
                    >
                      {link.children.map((child) => {
                        const isHovered = hoveredDropdownItem === child.name;

                        return (
                          <a
                            key={child.name}
                            href={child.href}
                            onMouseEnter={() =>
                              setHoveredDropdownItem(child.name)
                            }
                            onMouseLeave={() => setHoveredDropdownItem(null)}
                            onClick={() => setHoveredDropdownItem(null)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "100%",
                              minHeight: "44px",
                              padding: "11px 16px",
                              margin: "3px 0",
                              borderRadius: "8px",
                              boxSizing: "border-box",
                              backgroundColor: isHovered
                                ? "#f1f1f6"
                                : "#ffffff",
                              color: isHovered ? "#df3044" : "#303030",
                              fontSize: "14px",
                              fontWeight: "500",
                              textDecoration: "none",
                              transition: "background-color 0.2s, color 0.2s",
                            }}
                          >
                            {child.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  className="
                    whitespace-nowrap
                    rounded-md px-2 py-2
                    text-[14px] font-medium
                    text-white
                    transition-colors duration-200
                    hover:text-[#ffcf72]
                    focus-visible:outline-none
                    focus-visible:text-[#ffcf72]
                    2xl:text-[15px]
                  "
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Plan My Trip */}
        <div className="hidden justify-end xl:flex">
          <PlanMyTripButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            relative z-10 ml-auto
            flex h-11 w-11
            items-center justify-center
            rounded-lg border border-white/40
            text-white transition-colors
            hover:bg-white/10
            xl:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile & Tablet Menu */}
      {mobileOpen && (
        <div
          className="
            absolute left-0 top-full
            z-50 w-full
            px-4 pb-4
            sm:px-6 md:px-8
            xl:hidden
          "
        >
          <div
            className="
              mx-auto max-h-[75vh]
              max-w-[600px]
              overflow-y-auto
              rounded-xl border border-gray-100
              bg-white p-4
              shadow-2xl
              sm:p-5
            "
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <details className="border-b border-gray-100">
                    <summary
                      className="
                        flex cursor-pointer
                        list-none items-center
                        justify-between
                        py-3.5
                        text-[15px] font-medium
                        text-gray-800
                      "
                    >
                      {link.name}

                      <ChevronDown
                        size={17}
                        className="transition-transform duration-200"
                      />
                    </summary>

                    <div className="mb-2 rounded-lg bg-gray-50 px-4 py-2">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="
                            block py-2.5
                            text-sm text-gray-600
                            transition-colors
                            hover:text-[#df3044]
                          "
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="
                      block border-b border-gray-100
                      py-3.5
                      text-[15px] font-medium
                      text-gray-800
                      transition-colors
                      hover:text-[#df3044]
                    "
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <a
              href="#trip-search"
              onClick={closeMobileMenu}
              className="
                mt-5 flex h-12 w-full
                items-center justify-center
                rounded-full
                bg-[#df3044]
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-[#bd2035]
              "
            >
              Plan My Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
