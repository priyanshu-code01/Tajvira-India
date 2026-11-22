import { motion } from "motion/react";

const easePremium = [0.22, 1, 0.36, 1];

const Logo = () => {
  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: easePremium,
      }}
      whileHover={{ scale: 1.035 }}
      className="
        group relative z-10 flex w-fit
        max-w-none flex-col justify-center
        leading-none
      "
    >
      {/* Logo Text */}
      <span
        className="
          relative inline-block overflow-hidden
          whitespace-nowrap
          text-[20px] font-bold
          tracking-[-1.2px]
          text-[#f5b900]
          sm:text-[26px]
          playfair-heading
        "
      >
        Tajvira India Tours

        {/* Golden Shine Animation */}
        <motion.span
          aria-hidden="true"
          initial={{ x: "-100%" }}
          animate={{ x: "350%" }}
          transition={{
            duration: 2.2,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none absolute inset-0
            w-1/3 -skew-x-12
            bg-gradient-to-r
            from-transparent via-white/50 to-transparent
          "
        />
      </span>

      {/* Tagline */}
      <span
        className="
          mt-1 whitespace-nowrap
          font-serif text-[10px]
          italic tracking-wide
          text-white sm:text-[11px]
          transition-colors duration-300
          group-hover:text-[#f5b900]
        "
      >
        Crafting memories, TAJVIRA style
      </span>

      {/* Logo Underline Animation */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: easePremium,
        }}
        className="
          mt-1 h-[1px] w-full origin-left
          bg-gradient-to-r
          from-[#f5b900] via-[#f5b900]/40 to-transparent
        "
      />
    </motion.a>
  );
};

export default Logo;
