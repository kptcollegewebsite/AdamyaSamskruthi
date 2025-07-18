import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function QuickIntro() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Adamya Samskruthi
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Adamya Samskruthi Seva Trust is a community-driven initiative rooted
          in the values of culture, compassion, and education. With a mission to
          foster personal growth and social responsibility, we support children,
          youth, and society through programs built on our core philosophy —
          Pancha Tatva.
        </p>
        <Link
          to="/about"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
        >
          Learn More About Us
        </Link>
      </motion.div>
    </section>
  );
}
