import React from "react";
import { motion } from "framer-motion";

const volunteerRoles = [
  {
    title: "Event Volunteer",
    description:
      "Help organize and manage events, workshops, and community outreach programs.",
  },
  {
    title: "Mentor",
    description:
      "Guide and support children through education, life skills, and moral values.",
  },
  {
    title: "Logistics Coordinator",
    description:
      "Assist with planning, transportation, supplies, and behind-the-scenes needs.",
  },
];

export default function Volunteers() {
  return (
    <section className="bg-pink-50 py-16 px-4 sm:px-8 lg:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-4">
          Volunteer Opportunities
        </h2>
        <p className="text-lg text-gray-700">
          Join us in spreading knowledge, kindness, and cultural values. Choose
          a role and become a part of our family.
        </p>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {volunteerRoles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md text-center"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              {role.title}
            </h3>
            <p className="text-gray-600 text-sm">{role.description}</p>
          </motion.div>
        ))}
      </div>

      <form className="bg-white mt-16 max-w-2xl mx-auto p-8 rounded-xl shadow">
        <h3 className="text-2xl font-semibold text-pink-700 mb-6 text-center">
          Join as a Volunteer
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-pink-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-pink-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-pink-400"
          />
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-pink-400"
          />
        </div>
        <textarea
          placeholder="Tell us a little about yourself"
          className="border border-gray-300 rounded px-4 py-2 mt-4 w-full focus:outline-pink-400"
        ></textarea>
        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-1">
            Area of Interest
          </label>
          <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-pink-400">
            <option>Select an option</option>
            <option>Event Volunteer</option>
            <option>Mentor</option>
            <option>Logistics</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-600 mb-1">
            Availability
          </label>
          <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-pink-400">
            <option>Select availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Both</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full w-full hover:bg-pink-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
