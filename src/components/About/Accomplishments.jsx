import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "500+",
    label: "Children Impacted",
    desc: "Through education, mentoring, and cultural programs.",
  },
  {
    value: "80+",
    label: "Events & Workshops",
    desc: "Conducted across schools and local communities.",
  },
  {
    value: "100+",
    label: "Active Volunteers",
    desc: "Regularly support initiatives and outreach programs.",
  },
  {
    value: "10",
    label: "Years of Service",
    desc: "Working continuously towards value-based community development.",
  },
];

export default function Stats() {
  return (
    <section className="bg-red-50 py-16 px-4 sm:px-6 lg:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-red-700 mb-4">
          Impact Snapshot
        </h2>
        <p className="text-lg text-gray-700">
          A quick look at the impact created through collective effort,
          dedication, and cultural commitment.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl text-center shadow hover:shadow-md"
          >
            <h3 className="text-3xl font-bold text-red-600">{item.value}</h3>
            <p className="text-lg font-medium text-gray-700 mt-2">
              {item.label}
            </p>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
