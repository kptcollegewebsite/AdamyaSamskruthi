import React from "react";
import { motion } from "framer-motion";
import {
  GiHouse,
  GiBookAura,
  GiMusicalNotes,
  GiMeditation,
  GiSkills,
} from "react-icons/gi";

const beliefs = [
  {
    title: "Aashraya",
    description:
      "A protective home and community environment that nurtures physical and emotional well-being.",
    icon: <GiHouse className="text-4xl text-red-500 mx-auto mb-4" />,
  },
  {
    title: "Shikshana",
    description:
      "Providing holistic education and mentoring that builds strong minds and character.",
    icon: <GiBookAura className="text-4xl text-red-500 mx-auto mb-4" />,
  },
  {
    title: "Kala‑Pravinyathe",
    description:
      "Encouraging creativity through music, dance, theater, and traditional Indian arts.",
    icon: <GiMusicalNotes className="text-4xl text-red-500 mx-auto mb-4" />,
  },
  {
    title: "Samskara",
    description:
      "Instilling discipline, cultural values, and ethical behavior through rituals and learning.",
    icon: <GiMeditation className="text-4xl text-red-500 mx-auto mb-4" />,
  },
  {
    title: "Udyama‑Sheelathe",
    description:
      "Fostering self-reliance, entrepreneurship, and ethical living for a sustainable future.",
    icon: <GiSkills className="text-4xl text-red-500 mx-auto mb-4" />,
  },
];

export default function CoreBeliefs() {
  return (
    <section className="bg-red-50 py-12 px-4 sm:px-6 lg:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-red-700 mb-4">
          Our Core Beliefs
        </h2>
        <p className="text-lg text-gray-700">
          The work we do at Adamya Samskruthi is shaped by timeless Indian
          wisdom and driven by modern values of inclusivity, ethics, and
          empowerment.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {beliefs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
