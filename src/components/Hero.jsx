import { useState, useEffect } from "react";
import { MessageCircleMore } from "lucide-react";
import { motion } from "motion/react";

import SearchBar from "./SearchBar";

const heroImages = [
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=90",
];

const Hero = () => {
  const phone = "917068261642";

  // WhatsApp Default Message
  const defaultMessage =
    "Hello Tajvira India Tour, I would like to inquire about your tours.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  // Background Image Slideshow
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Button Hover Position
  const [buttonPosition, setButtonPosition] = useState({
    x: 50,
    y: 50,
  });

  const getButtonPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setButtonPosition({ x, y });
  };

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen
        flex-col justify-center
        overflow-hidden bg-cover bg-center
      "
    >
      {/* Background Image Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === activeImage ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            animation:
              index === activeImage ? "heroZoom 6s ease-out forwards" : "none",
          }}
        />
      ))}

      {/* Background Overlay */}
      <div className="absolute inset-0 z-1 bg-black/40" />

      {/* Hero Content */}
      <div
        className="
          relative z-10
          mx-auto flex w-full
          flex-col items-center
          justify-center
          px-4
          pt-0 pb-70
          -translate-y-16
          sm:px-6 sm:-translate-y-20
          md:px-8 md:pt-32 md:pb-52
          md:-translate-y-16
          lg:translate-y-0 lg:pt-36
        "
      >
        {/* Subtitle */}
        <p
          className="
            mb-5 flex w-full
            flex-wrap items-center
            justify-center gap-2
            text-center
            text-[clamp(14px,1.5vw,24px)]
            font-medium leading-snug
            text-white
          "
        >
          <span className="text-red-400">——</span>

          <span>Timeless Journeys, Tajvira Style</span>

          <span className="text-red-400">——</span>
        </p>

        {/* Main Heading */}
        <h1
          className="
            mx-auto w-full
            max-w-362.5
            text-center
            font-serif font-bold
            text-[clamp(2.2rem,5.2vw,5.25rem)]
            leading-[1.12]
            tracking-[-0.035em]
            text-white
            drop-shadow-lg
            text-balance
          "
        >
          {"Unveil the True Magic of India".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.055,
                duration: 0.12,
                ease: "easeOut",
              }}
              className="inline-block whitespace-pre"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Our Services Button */}
        <motion.a
          href="#services"
          onMouseEnter={getButtonPosition}
          className="
            group relative isolate
            mt-4 sm:mt-8
            inline-flex
            min-h-10 sm:min-h-13
            min-w-30.25 sm:min-w-41.25
            items-center justify-center
            overflow-hidden
            rounded-full
            bg-[#df3044]
            px-7 sm:px-10
            py-3
            text-sm sm:text-base
            font-semibold
            text-white
            shadow-lg
            transition-colors duration-300
            hover:text-[#df3044]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
          "
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.9,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Button Hover Animation */}
          <span
            aria-hidden="true"
            className="
              absolute inset-0 -z-10
              scale-0 rounded-full
              bg-white
              transition-transform duration-500 ease-out
              group-hover:scale-100
            "
            style={{
              transformOrigin: `${buttonPosition.x}% ${buttonPosition.y}%`,
            }}
          />

          <span className="relative z-10 whitespace-nowrap">Our Services</span>
        </motion.a>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.85,
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute bottom-45 left-0
          z-20 w-full px-5
          sm:bottom-12
          md:bottom-16
        "
      >
        <SearchBar />
      </motion.div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          fixed bottom-6 left-6 z-50
          inline-flex h-13.5
          items-center justify-center
          gap-3
          rounded-full
          bg-[#df3044]
          pl-1.5 pr-5
          text-white
          shadow-xl
          transition-transform duration-300
          hover:scale-105
        "
      >
        {/* WhatsApp Icon */}
        <span
          className="
            flex h-10.5 w-10.5
            shrink-0 items-center justify-center
            rounded-full bg-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="25"
            height="25"
            fill="#25D366"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 8.025 0C3.688 0 .158 3.529.156 7.865c0 1.388.363 2.744 1.054 3.94L.141 16l4.29-1.125a7.86 7.86 0 0 0 3.59.864h.004c4.336 0 7.866-3.53 7.868-7.866a7.82 7.82 0 0 0-2.292-5.547ZM8.025 14.4a6.53 6.53 0 0 1-3.33-.914l-.239-.142-2.545.668.679-2.481-.156-.255a6.52 6.52 0 0 1-1.001-3.411c0-3.638 2.96-6.598 6.6-6.598a6.55 6.55 0 0 1 4.667 1.934 6.55 6.55 0 0 1 1.93 4.67c-.002 3.638-2.962 6.599-6.605 6.599Zm3.62-4.943c-.198-.099-1.17-.577-1.352-.643-.181-.066-.313-.099-.445.1-.132.197-.511.642-.626.774-.115.132-.231.148-.429.05-.198-.1-.834-.308-1.589-.98-.587-.523-.984-1.17-1.099-1.368-.115-.198-.012-.305.086-.404.089-.088.198-.231.297-.346.099-.115.132-.198.198-.33.066-.132.033-.247-.017-.346-.05-.1-.445-1.073-.61-1.469-.16-.385-.324-.333-.445-.34l-.379-.007a.73.73 0 0 0-.528.247c-.181.198-.693.676-.693 1.649s.71 1.913.809 2.045c.099.132 1.397 2.133 3.384 2.99.473.204.842.326 1.13.417.475.151.907.13 1.249.079.381-.057 1.17-.478 1.335-.94.165-.462.165-.858.115-.94-.05-.083-.181-.132-.379-.231Z" />
          </svg>
        </span>

        {/* WhatsApp Text */}
        <span
          className="
            whitespace-nowrap
            font-serif
            text-[13px]
            font-bold
            tracking-[3px]
            text-white
          "
        >
          WHATSAPP
        </span>
      </a>

      {/* Chat Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open chat"
        className="
          fixed bottom-6 right-6 z-50 m-5
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-green-600
          text-white shadow-xl
          transition hover:scale-110
        "
      >
        <MessageCircleMore size={28} />
      </a>
    </section>
  );
};

export default Hero;
