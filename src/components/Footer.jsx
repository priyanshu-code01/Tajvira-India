import { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  Phone,
  Mail,
  ChevronRight,
  Camera,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "motion/react";

import Logo from "./Logo";

import { useActiveSection, setActiveSection } from "../context/activeSection";

const easePremium = [0.22, 1, 0.36, 1];

const Footer = () => {
  // Shared active section state
  const activeLink = useActiveSection();

  const phone = "918218462981";

  const quickLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About Us", href: "/#about-us", id: "about-us" },
    { name: "Contact Us", href: "/#contact", id: "contact" },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      id: "privacy-policy",
    },
    {
      name: "Terms and Conditions",
      href: "/terms-and-conditions",
      id: "terms-and-conditions",
    },
  ];

  const trendingLinks = [
    { name: "Tour Packages", href: "/#packages", id: "packages" },
    { name: "Tour by Category", href: "/#packages", id: "packages" },
    { name: "Tour Activities", href: "/#packages", id: "packages" },
    { name: "Destinations", href: "/#destinations", id: "destinations" },
    { name: "Our Gallery", href: "/#gallery", id: "gallery" },
  ];

  const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    color: "hover:bg-[#E4405F]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
    color: "hover:bg-[#FF0033]",
  },
];

  // Active link while scrolling
  useEffect(() => {
    const sectionIds = [
      "home",
      "about-us",
      "packages",
      "destinations",
      "gallery",
      "contact",
    ];

    const updateActiveSection = () => {
      if (window.location.pathname !== "/") return;

      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 160) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  // Handle link click
  const handleLinkClick = (id) => {
    setActiveSection(id);
  };

  // Footer link styling
  const linkClass = (id) => `
    group flex w-fit items-center gap-2
    text-[15px]
    transition-colors duration-300
    ${
      activeLink === id
        ? "font-semibold text-[#f5b900]"
        : "text-gray-400 hover:text-[#f5b900]"
    }
  `;

  // Footer animation
  const columnVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easePremium,
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#f5b900]/[0.035] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#e83248]/[0.04] blur-[100px]" />

      {/* Main Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="
          relative z-10 mx-auto
          max-w-[1400px]
          px-6 pb-14 pt-16
          sm:px-8
          lg:px-10 lg:pb-16 lg:pt-20
        "
      >
        <div
          className="
            grid grid-cols-1 gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]
            lg:gap-10
          "
        >
          {/* Brand Section */}
          <motion.div variants={columnVariants}>
            {/* Logo Component */}
            <div className="group relative inline-flex flex-col">
              <Logo />
            </div>

            {/* Description */}
            <p
              className="
                mt-7 max-w-[320px]
                text-[15px] leading-7
                text-gray-400
              "
            >
              We take care of every detail so you can travel with confidence and
              ease.
            </p>

            {/* Phone and WhatsApp */}
            <div className="mt-7 space-y-5">
              {/* Phone */}
              <motion.a
                href={`tel:+${phone}`}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4"
              >
                <span
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full bg-white text-black
                    transition-colors duration-300
                    group-hover:bg-[#f5b900]
                  "
                >
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">
                    Call Us 24/7
                  </span>

                  <span
                    className="
                      mt-1 block text-base font-semibold
                      text-white transition-colors
                      group-hover:text-[#f5b900]
                    "
                  >
                    +91 8218462981
                  </span>
                </span>
              </motion.a>

              {/* WhatsApp Contact */}
              <motion.a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4"
              >
                <span
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full bg-white text-[#25D366]
                    transition-colors duration-300
                    group-hover:bg-[#25D366]
                    group-hover:text-white
                  "
                >
                  <MessageCircleIcon />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">
                    WhatsApp Support
                  </span>

                  <span
                    className="
                      mt-1 block text-base font-semibold
                      text-white transition-colors
                      group-hover:text-[#25D366]
                    "
                  >
                    Chat With Us
                  </span>
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-8 text-lg font-bold text-white">Quick Links</h3>

            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={linkClass(link.id)}
                  >
                    <ChevronRight
                      size={15}
                      className={`
                        shrink-0 transition-transform duration-300
                        group-hover:translate-x-1
                        ${
                          activeLink === link.id
                            ? "text-[#f5b900]"
                            : "text-gray-500"
                        }
                      `}
                    />

                    {link.name}

                    {activeLink === link.id && (
                      <motion.span
                        layoutId="footer-active-link"
                        className="ml-1 h-1.5 w-1.5 rounded-full bg-[#f5b900]"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Trending Now */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-8 text-lg font-bold text-white">Trending Now</h3>

            <ul className="space-y-5">
              {trendingLinks.map((link, index) => (
                <li key={`${link.name}-${index}`}>
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={linkClass(link.id)}
                  >
                    <ChevronRight
                      size={15}
                      className={`
                        shrink-0 transition-transform duration-300
                        group-hover:translate-x-1
                        ${
                          activeLink === link.id
                            ? "text-[#f5b900]"
                            : "text-gray-500"
                        }
                      `}
                    />

                    {link.name}

                    {activeLink === link.id && (
                      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#f5b900]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-8 text-lg font-bold text-white">Contact Us</h3>

            <div className="space-y-7">
              {/* Phone */}
              <motion.a
                href={`tel:+${phone}`}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-4"
              >
                <span
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full bg-white text-black
                    transition-colors duration-300
                    group-hover:bg-[#f5b900]
                  "
                >
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">
                    Call Us 24/7
                  </span>

                  <span
                    className="
                      mt-1 block text-base font-semibold
                      text-white transition-colors
                      group-hover:text-[#f5b900]
                    "
                  >
                    +91 8218462981
                  </span>
                </span>
              </motion.a>

              {/* Email */}
              <div className="flex items-center gap-4">
                <span
                  className="
      flex h-10 w-10 shrink-0
      items-center justify-center
      rounded-full bg-white text-black
    "
                >
                  <Mail size={17} />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">Email Us</span>

                  <a
                    href="mailto:tajviraindia@gmail.com"
                    className="
        mt-1 block text-sm font-semibold
        text-white transition-colors
        hover:text-[#f5b900]
      "
                  >
                    tajviraindia@gmail.com
                  </a>
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full bg-white text-black
                  "
                >
                  <MapPin size={17} />
                </span>

                <span>
                  <span className="block text-sm text-gray-400">
                    Our Service
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-white">
                    Explore Incredible India
                  </span>
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="mr-1 text-sm text-gray-400">Follow Us -</span>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      flex h-9 w-9
                      items-center justify-center
                      rounded-sm bg-white/10
                      text-white
                      transition-colors duration-300
                      ${social.color}
                    `}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div
          className="
            mx-auto flex max-w-[1400px]
            flex-col items-center justify-between
            gap-4 px-6 py-6
            sm:px-8 md:flex-row lg:px-10
          "
        >
          <p className="text-center text-sm leading-6 text-gray-500 md:text-left">
            © {new Date().getFullYear()} Tajvira India Tours, All Rights
            Reserved. Designed & Developed by Priyanshu Singh.
          </p>

          <p
            className="
              flex items-center gap-2
              text-center text-xs tracking-wide
              text-gray-500
            "
          >
            Discover India
            <span className="text-[#f5b900]">•</span>
            Experience Incredible Journeys
          </p>

          <motion.a
            href="/#home"
            onClick={() => handleLinkClick("home")}
            whileHover={{ y: -4 }}
            className="
              flex items-center gap-2
              text-sm text-gray-400
              transition-colors hover:text-[#f5b900]
            "
          >
            Back to Top
            <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

// Small WhatsApp contact icon
const MessageCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="19"
    height="19"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.5 0 .13 5.37.13 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.95 11.95 0 0 0 5.9 1.55h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.2-3.56-8.47ZM12.1 21.9a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.68.97.98-3.59-.23-.37a9.87 9.87 0 0 1-1.52-5.34c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.44-4.43 9.87-9.9 9.87Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.32 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

export default Footer;
