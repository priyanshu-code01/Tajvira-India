import { motion } from "motion/react";

const WhyChooseUs = () => {
  return (
    <section
      id="about-us"
      className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1290px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* Small Heading */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-yellow-500"></span>
            <span className="text-sm font-semibold text-gray-900">
              Why Choose Us
            </span>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-[560px] font-serif text-4xl leading-tight tracking-tight text-[#242424] sm:text-5xl"
          >
            Passionate About Unveiling the Magic of India
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-[550px] text-[15px] font-medium leading-6 text-gray-500 sm:text-base sm:leading-6"
          >
            At Tajvira India Tours, we believe every journey should be more than
            just a trip – it should be an unforgettable experience. From
            witnessing the beauty of the Taj Mahal to exploring the royal
            palaces of Rajasthan and discovering the vibrant streets of Old
            Delhi, we aim to help you experience the true magic of India.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 max-w-[550px] text-[15px] font-medium leading-6 text-gray-500 sm:text-base sm:leading-6"
          >
            Our goal is to make every journey comfortable, memorable, and
            hassle-free. Whether you are planning a family holiday, a romantic
            getaway, or a cultural adventure, Tajvira India Tours is here to
            help you discover India's beautiful destinations, rich heritage, and
            diverse traditions with care and personal attention.
          </motion.p>

          {/* About Button */}
          <motion.a
            href="#about-us"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 inline-flex min-w-[185px] items-center justify-center rounded-tl-[14px] rounded-tr-[28px] rounded-br-[14px] rounded-bl-[28px] bg-[#e83248] px-9 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#c91f36]"
          >
            More About Us
          </motion.a>
        </motion.div>

        {/* Right Images */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[420px] w-[78%] overflow-hidden sm:h-[520px] lg:h-[555px]"
          >
            <img
              src="/images/taj-mahal.jpg"
              alt="Taj Mahal"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Side Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: 150,
              rotate: 25,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 10,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -right-1 top-[32%] z-10 w-[62%] border-[7px] border-black bg-black shadow-xl sm:-right-5 sm:w-[65%] sm:border-[9px] lg:w-[55%]"
          >
            <img
              src="/images/indian-culture.jpg"
              alt="Indian traditional culture"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
