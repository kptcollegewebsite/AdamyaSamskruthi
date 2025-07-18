import React from "react";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-red-700 mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Adamya Samskruthi was born out of a dream—a dream to nurture values,
          culture, and compassion in young minds and create a self-reliant,
          ethically strong society. Inspired by Indian traditions and guided by
          respected mentors, our founders laid the first stone with a small
          group of like-minded individuals who believed in change through
          service.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-red-600">
            How It All Began
          </h3>
          <p className="text-gray-700">
            What started as weekend gatherings to teach moral stories and
            bhajans to a few children has now blossomed into a structured
            organization with programs on education, culture, and life skills.
            Every initiative is rooted in love for Bharatiya traditions and a
            sense of duty towards the community.
          </p>
          <p className="text-sm text-gray-500 italic">
            “We wanted to build a place where every child feels supported—not
            just academically, but emotionally and spiritually too.” – Founding
            Member
          </p>
        </div>

        <img
          src="/images/events/4.jpg"
          alt="Founding Story"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
