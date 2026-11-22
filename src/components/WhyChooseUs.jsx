import { useState } from "react";
import { motion } from "motion/react";

const easePremium = [0.22, 1, 0.36, 1];

const WhyChooseUs = () => {
  // Button hover position
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
      id="about-us"
      className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1290px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: easePremium,
          }}
          className="w-full"
        >
          {/* Small Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: easePremium }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-0.5 w-8 bg-yellow-500" />

            <span className="text-sm font-semibold uppercase tracking-[2px] text-gray-900">
              Why Choose Us
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: easePremium,
            }}
            className="max-w-140 font-serif text-3xl leading-tight tracking-tight text-[#242424] sm:text-4xl lg:text-[46px]"
          >
            Passionate About Unveiling the Magic of India
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: easePremium,
            }}
            className="mt-8 max-w-137.5 text-[15px] font-medium leading-7 text-gray-500 sm:text-base"
          >
            At Tajvira India Tours, we believe every journey should be more than
            just a trip – it should be an unforgettable experience. From
            witnessing the beauty of the Taj Mahal to exploring the royal
            palaces of Rajasthan and discovering the vibrant streets of Old
            Delhi, we aim to help you experience the true magic of India.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.85,
              delay: 0.35,
              ease: easePremium,
            }}
            className="mt-7 max-w-137.5 text-[15px] font-medium leading-7 text-gray-500 sm:text-base"
          >
            Our goal is to make every journey comfortable, memorable, and
            hassle-free. Whether you are planning a family holiday, a romantic
            getaway, or a cultural adventure, Tajvira India Tours is here to
            help you discover India's beautiful destinations, rich heritage, and
            diverse traditions with care and personal attention.
          </motion.p>

          {/* More About Us Button */}
          <motion.a
            href="#about-us"
            onMouseMove={getButtonPosition}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: easePremium,
            }}
            whileTap={{ scale: 0.97 }}
            className="
              group relative isolate
              mt-10 inline-flex
              min-h-13 min-w-46
              items-center justify-center
              overflow-hidden
              rounded-tl-xl
              rounded-tr-[38px]
              rounded-br-xl
              rounded-bl-[38px]
              bg-[#e83248]
              px-9 py-4
              text-sm font-bold
              text-white
              transition-colors duration-300
              hover:text-[#e83248]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#e83248]
            "
          >
            {/* Circular Hover Animation */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                h-4 w-4
                -translate-x-1/2 -translate-y-1/2
                scale-0 rounded-full
                bg-white
                transition-transform duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[20]
              "
              style={{
                left: `${buttonPosition.x}%`,
                top: `${buttonPosition.y}%`,
              }}
            />

            {/* Button Text */}
            <span className="relative z-10 whitespace-nowrap">
              More About Us
            </span>
          </motion.a>
        </motion.div>

        {/* Right Images */}
        <div className="relative mx-auto w-full max-w-130">
          {/* Main Image - Top to Bottom Animation */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: -120,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 1.2,
              ease: easePremium,
            }}
            className="group relative h-105 w-[78%] overflow-hidden sm:h-130 lg:h-138.75"
          >
            <motion.img
              src="/images/taj-mahal.jpg"
              alt="Taj Mahal"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.5,
                ease: easePremium,
              }}
              whileHover={{ scale: 1.06 }}
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Side Image - Existing Animation */}
          <motion.div
            initial={{
              opacity: 0,
              x: 130,
              rotate: 18,
              scale: 0.75,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 10,
              scale: 1,
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: easePremium,
            }}
            whileHover={{
              rotate: 5,
              scale: 1.04,
              y: -8,
            }}
            className="absolute -right-1 top-[32%] z-10 w-[62%] border-[7px] border-black bg-black shadow-2xl sm:-right-5 sm:w-[65%] sm:border-[9px] lg:w-[55%]"
          >
            <img
              src="/images/indian-culture.jpg"
              alt="Indian traditional culture"
              className="aspect-4/5 w-full object-cover"
            />
          </motion.div>

          {/* Decorative Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: easePremium,
            }}
            className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 border-[3px] border-yellow-500/70 sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-36"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
