import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="mb-10">
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-semibold text-red-700 mb-4">
          Be a part of our journey
        </h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Whether it's volunteering at events, mentoring youth, or supporting us
          financially—every hand strengthens our mission.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/donate"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
          >
            Register
          </Link>
          <Link
            to="/donate"
            className="bg-red-100 text-red-700 px-6 py-3 rounded-full hover:bg-red-200 transition"
          >
            Volunteer
          </Link>
          <Link
            to="/contact"
            className="bg-white border border-red-300 text-red-700 px-6 py-3 rounded-full hover:bg-red-50 transition"
          >
            Stay Informed
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
