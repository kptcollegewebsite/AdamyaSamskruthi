import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Smt. Anjali Rao",
    role: "Founder & Visionary",
    image: "https://source.unsplash.com/200x200/?woman,leader",
    bio: "Inspired by Indian culture and spiritual heritage, she laid the foundation of Adamya Samskruthi to nurture values and nation-builders.",
  },
  {
    name: "Shri. Mahesh Hegde",
    role: "Trustee & Mentor",
    image: "https://source.unsplash.com/200x200/?man,mentor",
    bio: "Guides the team with deep insights on cultural education and community empowerment.",
  },
  {
    name: "Kavya Bhat",
    role: "Program Coordinator",
    image: "https://source.unsplash.com/200x200/?teacher,volunteer",
    bio: "Handles educational and art-based initiatives across schools and workshops.",
  },
  {
    name: "Nikhil Joshi",
    role: "Youth Volunteer Lead",
    image: "https://source.unsplash.com/200x200/?indian,youth",
    bio: "Motivates and manages college volunteers who actively contribute to all major events.",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-red-700 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-700">
          The heart of Adamya Samskruthi lies in its people—passionate,
          grounded, and committed to seva. Each team member plays a unique role
          in shaping lives and upholding values.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-red-50 p-6 rounded-xl text-center shadow hover:shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-red-700">
              {member.name}
            </h3>
            <p className="text-sm text-red-500 mb-2">{member.role}</p>
            <p className="text-sm text-gray-600">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
