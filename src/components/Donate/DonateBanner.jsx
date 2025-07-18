import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaHandsHelping, FaLeaf, FaChild } from "react-icons/fa";

const DonateBanner = () => {
  return (
    <section className="bg-gradient-to-b from-red-100 to-white py-16 px-4 md:px-10 lg:px-20 text-center relative overflow-hidden">
      {/* Animated Icons Row */}
      <div className="flex justify-center gap-6 mb-6 flex-wrap text-red-600 text-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBookOpen />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaHandsHelping />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FaLeaf />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaChild />
        </motion.div>
      </div>

      {/* Text Content */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        🙌 Empower a Child. Enrich a Culture. Elevate a Nation.
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        Every rupee donated helps us organize value-based programs for children
        and youth — from educational workshops to cultural celebrations like
        Sharada Pooja. Your contribution provides study materials, cultural
        training, nutritious snacks, and a platform to grow into responsible,
        value-driven citizens of Bharat.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#donate"
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Support Now
      </motion.a>
    </section>
  );
};

export default DonateBanner;
