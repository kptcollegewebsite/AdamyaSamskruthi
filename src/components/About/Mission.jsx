import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="bg-red-50 py-12 px-4 sm:px-6 lg:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-red-700 mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Adamya Samskruthi</strong> exists to nurture a culture rooted
          in humanity, harmony, and heritage. We believe in fostering the spirit
          of <span className="text-red-600 font-semibold">"Samskruthi"</span>—
          our cultural essence—through education, service, and selfless
          community-building.
        </p>
        <p className="mt-4 text-md text-gray-600">
          Our mission is to shape responsible citizens by instilling values that
          encourage nation-building, compassion, and a deep respect for
          tradition. We aim to uplift lives through knowledge, care, and
          creative expression.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center"
      >
        <img
          src="/images/events/desham/13.jpg"
          alt="Mission Visual"
          className="rounded-lg shadow-md w-full object-cover"
        />

        <div>
          <h3 className="text-2xl font-semibold text-red-600 mb-3">
            Nation-Building Through Culture
          </h3>
          <p className="text-gray-700">
            Our vision extends beyond charity—we strive to develop citizens with
            strong ethical roots and cultural awareness. Through every activity
            and initiative, we keep the spirit of Bharat alive, echoing the
            values passed down through generations.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Promote traditional values through action</li>
            <li>Bridge generational gaps with shared learning</li>
            <li>Empower youth with character and confidence</li>
            <li>Preserve and pass down rich cultural practices</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
