import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workshops } from "./WorkshopData";

const WorkshopsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-20 bg-slate-50 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-800">Our Workshops</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Inspiring youth through experiential learning, seva, and cultural
            immersion.
          </p>
        </motion.div>

        <div className="space-y-16">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-red-700 mb-2">
                {workshop.title}
              </h2>
              <p className="text-gray-700 mb-4">{workshop.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {workshop.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${workshop.title} ${idx + 1}`}
                    className="rounded-lg cursor-pointer object-cover h-40 w-full hover:scale-105 transition-transform duration-300 shadow-md"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="max-h-[90vh] max-w-[90vw] rounded shadow-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkshopsPage;
