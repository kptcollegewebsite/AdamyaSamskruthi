import React from "react";
import { motion } from "framer-motion";
import {
  GiHouse,
  GiBookAura,
  GiMusicalNotes,
  GiMeditation,
  GiSkills,
} from "react-icons/gi";

const pillars = [
  {
    icon: <GiHouse className="text-4xl text-red-600" />,
    title: "Aashraya",
    desc: "Providing a safe, supportive space for growth and community.",
  },
  {
    icon: <GiBookAura className="text-4xl text-red-600" />,
    title: "Shikshana",
    desc: "Empowering lives through education and mentorship.",
  },
  {
    icon: <GiMusicalNotes className="text-4xl text-red-600" />,
    title: "Kala‑Pravinyathe",
    desc: "Celebrating and nurturing traditional arts and talents.",
  },
  {
    icon: <GiMeditation className="text-4xl text-red-600" />,
    title: "Samskara",
    desc: "Instilling discipline, values, and cultural refinement.",
  },
  {
    icon: <GiSkills className="text-4xl text-red-600" />,
    title: "Udyama‑Sheelathe",
    desc: "Promoting ethics, self-reliance, and professional growth.",
  },
];

export default function Teaser() {
  return (
    <section className="bg-red-50 py-16 px-6 sm:px-10 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
          Explore Pancha Tatva
        </h2>
        <p className="text-gray-600 mb-10">
          Our foundational pillars that guide every initiative and inspire
          holistic development.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow p-6 text-center hover:shadow-md"
          >
            <div className="flex justify-center mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {pillar.title}
            </h3>
            <p className="text-sm text-gray-600">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
