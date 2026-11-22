import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { Menu, X, ChevronDown } from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

import Logo from "./Logo";

import { useActiveSection, setActiveSection } from "../context/activeSection";

// Premium easing
const easePremium = [0.22, 1, 0.36, 1];

// Plan My Trip button
const PlanMyTripButton = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.a
      href="/#trip-search"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      className="
        group relative isolate inline-flex
        h-11 min-w-35
        items-center justify-center
        overflow-hidden rounded-full
        border border-white/90
        px-5 text-sm font-medium text-white
        transition-colors duration-300
        hover:border-[#df3044]
      "
    >
      {/* Circular Fill Animation */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute
          h-4 w-4
          -translate-x-1/2 -translate-y-1/2
          scale-0 rounded-full
          bg-[#df3044]
          transition-transform duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-[20]
        "
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      />

      {/* Button Text */}
      <span className="relative z-10 whitespace-nowrap">Plan My Trip</span>
    </motion.a>
  );
};

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shared active section state
  const activeLink = useActiveSection();

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about-us" },
    {
      name: "Packages",
      children: [
        { name: "Same Day Tours", href: "/#packages" },
        { name: "Taj Mahal Tours", href: "/#packages" },
        { name: "Golden Triangle Tours", href: "/#packages" },
        { name: "Wildlife Tours", href: "/#packages" },
        { name: "Spiritual Tours", href: "/#packages" },
      ],
    },
    {
      name: "Destinations",
      children: [
        { name: "Agra", href: "/#destinations" },
        { name: "Delhi", href: "/#destinations" },
        { name: "Jaipur", href: "/#destinations" },
        { name: "Mathura", href: "/#destinations" },
        { name: "Ranthambore", href: "/#destinations" },
        { name: "Udaipur", href: "/#destinations" },
      ],
    },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  // Check active section and header scroll
  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname !== "/") return;

      const sectionIds = [
        "home",
        "about-us",
        "packages",
        "destinations",
        "gallery",
        "contact",
      ];

      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 160) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        setActiveSection(hash);
      }

      updateNavbar();
    };

    updateNavbar();
    checkHash();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("hashchange", checkHash);
    };
  }, [location.pathname, location.hash]);

  // Check active navigation link
  const isLinkActive = (link) => {
    if (link.href) {
      return activeLink === link.href.split("#")[1];
    }

    return link.children?.some(
      (child) => activeLink === child.href.split("#")[1],
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const handleNavClick = (href) => {
    const sectionId = href.split("#")[1];

    setActiveSection(sectionId);
    closeMobileMenu();
  };

  return (
    <motion.header
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        ease: easePremium,
      }}
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-500
        ${
          isScrolled
            ? "bg-black/75 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      {/* Navbar */}
      <nav
        className="
          relative mx-auto grid
          h-19 w-full max-w-[1600px]
          grid-cols-[1fr_auto]
          items-center
          md:h-21
          xl:h-23
          xl:grid-cols-[220px_minmax(0,1fr)_150px]
        "
        style={{
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: easePremium,
          }}
          className="
            hidden items-center justify-center
            gap-3 whitespace-nowrap
            xl:flex
            2xl:gap-5
          "
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.08,
                ease: easePremium,
              }}
              className="group relative"
            >
              {link.children ? (
                <>
                  {/* Dropdown Button */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    className={`
                      relative flex items-center gap-1
                      rounded-md px-2 py-2
                      text-[14px] font-medium
                      ${isLinkActive(link) ? "text-[#f5b900]" : "text-white"}
                      transition-colors duration-300
                      hover:text-[#f5b900]
                      focus-visible:outline-none
                      focus-visible:text-[#f5b900]
                      2xl:text-[15px]
                    `}
                  >
                    {link.name}

                    <ChevronDown
                      size={15}
                      className="
                        transition-transform duration-300
                        group-hover:rotate-180
                        group-focus-within:rotate-180
                      "
                    />

                    <span
                      className={`
                        absolute bottom-0 left-2 right-2
                        h-[2px] origin-left rounded-full
                        bg-[#f5b900]
                        transition-transform duration-300
                        ${
                          isLinkActive(link)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </button>

                  {/* Desktop Dropdown Menu */}
                  <div
                    className="
                      invisible absolute left-0 top-full
                      z-50 translate-y-3 opacity-0
                      transition-all duration-300 ease-out
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
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: easePremium,
                      }}
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

                        const isActive =
                          activeLink === child.href.split("#")[1];

                        return (
                          <motion.a
                            key={child.name}
                            href={child.href}
                            onMouseEnter={() =>
                              setHoveredDropdownItem(child.name)
                            }
                            onMouseLeave={() => setHoveredDropdownItem(null)}
                            onClick={() => {
                              setHoveredDropdownItem(null);
                              handleNavClick(child.href);
                            }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
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
                              color:
                                isHovered || isActive ? "#df3044" : "#303030",
                              fontSize: "14px",
                              fontWeight: "500",
                              textDecoration: "none",
                              transition: "background-color 0.2s, color 0.2s",
                            }}
                          >
                            {child.name}
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    group/nav relative whitespace-nowrap
                    rounded-md px-2 py-2
                    text-[14px] font-medium
                    ${isLinkActive(link) ? "text-[#f5b900]" : "text-white"}
                    transition-colors duration-300
                    hover:text-[#f5b900]
                    focus-visible:outline-none
                    focus-visible:text-[#f5b900]
                    2xl:text-[15px]
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute bottom-0 left-2 right-2
                      h-[2px] origin-left rounded-full
                      bg-[#f5b900]
                      transition-transform duration-300
                      ${
                        isLinkActive(link)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover/nav:scale-x-100"
                      }
                    `}
                  />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Plan My Trip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: easePremium,
          }}
          className="hidden justify-end xl:flex"
        >
          <PlanMyTripButton />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.88 }}
          className="
            relative z-50 ml-auto
            flex h-11 w-11
            items-center justify-center
            rounded-full
            border-0 outline-none
            bg-transparent
            text-white transition-colors
            hover:bg-white/10
            focus:outline-none
            focus:ring-0
            xl:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {mobileOpen ? <X size={25} /> : <Menu size={25} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Background Overlay + Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Transparent Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="
                fixed inset-0 z-40
                bg-black/55
                backdrop-blur-[2px]
                xl:hidden
              "
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.35,
                ease: easePremium,
              }}
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
                  max-w-150
                  overflow-y-auto
                  rounded-xl
                  bg-white p-4
                  shadow-2xl
                  sm:p-5
                "
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: easePremium,
                    }}
                  >
                    {link.children ? (
                      <div className="border-b border-gray-100">
                        {/* Mobile Dropdown Heading */}
                        <button
                          type="button"
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.name ? null : link.name,
                            )
                          }
                          aria-expanded={mobileDropdown === link.name}
                          className={`
                            flex w-full
                            cursor-pointer
                            list-none items-center
                            justify-between
                            py-3.5
                            text-left
                            text-[15px] font-medium
                            transition-colors duration-300
                            ${
                              isLinkActive(link)
                                ? "text-[#d6a500]"
                                : "text-gray-800"
                            }
                          `}
                        >
                          {link.name}

                          <motion.span
                            animate={{
                              rotate: mobileDropdown === link.name ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={17} />
                          </motion.span>
                        </button>

                        {/* Animated Mobile Dropdown Items */}
                        <AnimatePresence initial={false}>
                          {mobileDropdown === link.name && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: easePremium,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 rounded-lg bg-gray-50 px-4 py-2">
                                {link.children.map((child, childIndex) => (
                                  <motion.a
                                    key={child.name}
                                    href={child.href}
                                    initial={{
                                      opacity: 0,
                                      x: -10,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      duration: 0.25,
                                      delay: childIndex * 0.04,
                                    }}
                                    onClick={() => {
                                      handleNavClick(child.href);
                                    }}
                                    className={`
                                      block py-2.5
                                      text-sm
                                      transition-colors duration-200
                                      ${
                                        activeLink === child.href.split("#")[1]
                                          ? "text-[#d6a500]"
                                          : "text-gray-600"
                                      }
                                      hover:text-[#d6a500]
                                    `}
                                  >
                                    {child.name}
                                  </motion.a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`
                          block border-b border-gray-100
                          py-3.5
                          text-[15px] font-medium
                          transition-colors
                          ${
                            isLinkActive(link)
                              ? "text-[#d6a500]"
                              : "text-gray-800"
                          }
                          hover:text-[#d6a500]
                        `}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Plan My Trip */}
                <motion.a
                  href="/#trip-search"
                  onClick={closeMobileMenu}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
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
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
