import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = {
  1: [
    "/images/events/booksdistribution/1.jpg",
    "/images/events/booksdistribution/2.jpg",
    "/images/events/booksdistribution/3.jpg",
    "/images/events/booksdistribution/4.jpg",
    "/images/events/booksdistribution/5.jpg",
    "/images/events/booksdistribution/6.jpg",
    "/images/events/booksdistribution/7.jpg",
    "/images/events/booksdistribution/8.jpg",
    "/images/events/booksdistribution/9.jpg",
  ],
  2: [
    "/images/events/clothesdistribution/1.jpg",
    "/images/events/clothesdistribution/2.jpg",
    "/images/events/clothesdistribution/3.jpg",
    "/images/events/clothesdistribution/4.jpg",
    "/images/events/clothesdistribution/5.jpg",
    "/images/events/clothesdistribution/6.jpg",
    "/images/events/clothesdistribution/7.jpg",
    "/images/events/clothesdistribution/8.jpg",
  ],
  3: [
    "/images/events/freedomfighterbooks/1.jpg",
    "/images/events/freedomfighterbooks/2.jpg",
    "/images/events/freedomfighterbooks/3.jpg",
  ],
  4: [
    "/images/events/kalinali/1.jpg",
    "/images/events/kalinali/2.jpg",
    "/images/events/kalinali/3.jpg",
    "/images/events/kalinali/4.jpg",
    "/images/events/kalinali/5.jpg",
    "/images/events/kalinali/6.jpg",
    "/images/events/kalinali/7.jpg",
    "/images/events/kalinali/8.jpg",
    "/images/events/kalinali/9.jpg",
    "/images/events/kalinali/10.jpg",
    "/images/events/kalinali/11.jpg",
    "/images/events/kalinali/12.jpg",
    "/images/events/kalinali/13.jpg",
    "/images/events/kalinali/14.jpg",
    "/images/events/kalinali/15.jpg",
    "/images/events/kalinali/16.jpg",
    "/images/events/kalinali/17.jpg",
    "/images/events/kalinali/18.jpg",
    "/images/events/kalinali/19.jpg",
    "/images/events/kalinali/20.jpg",
    "/images/events/kalinali/21.jpg",
    "/images/events/kalinali/22.jpg",
    "/images/events/kalinali/23.jpg",
    "/images/events/kalinali/24.jpg",
    "/images/events/kalinali/25.jpg",
  ],
  5: [
    "/images/events/kargil/1.jpg",
    "/images/events/kargil/2.jpg",
    "/images/events/kargil/3.jpg",
    "/images/events/kargil/4.jpg",
    "/images/events/kargil/5.jpg",
    "/images/events/kargil/6.jpg",
  ],
  6: [
    "/images/events/notebookdistribution/1.jpg",
    "/images/events/notebookdistribution/2.jpg",
    "/images/events/notebookdistribution/3.jpg",
    "/images/events/notebookdistribution/4.jpg",
    "/images/events/notebookdistribution/5.jpg",
    "/images/events/notebookdistribution/6.jpg",
    "/images/events/notebookdistribution/7.jpg",
    "/images/events/notebookdistribution/8.jpg",
    "/images/events/notebookdistribution/9.jpg",
  ],
  7: [
    "/images/events/templecleaning/1.jpg",
    "/images/events/templecleaning/2.jpg",
    "/images/events/templecleaning/3.jpg",
    "/images/events/templecleaning/4.jpg",
    "/images/events/templecleaning/5.jpg",
    "/images/events/templecleaning/6.jpg",
    "/images/events/templecleaning/7.jpg",
  ],
  8: [
    "/images/events/vanavasiseva/1.jpg",
    "/images/events/vanavasiseva/2.jpg",
    "/images/events/vanavasiseva/3.jpg",
    "/images/events/vanavasiseva/4.jpg",
    "/images/events/vanavasiseva/5.jpg",
    "/images/events/vanavasiseva/6.jpg",
    "/images/events/vanavasiseva/7.jpg",
  ],
  9: ["/images/events/abhimani/1.jpg", "/images/events/abhimani/2.jpg"],
  10: [
    "/images/events/achieversintro/1.jpg",
    "/images/events/achieversintro/2.jpg",
    "/images/events/achieversintro/3.jpg",
    "/images/events/achieversintro/4.jpg",
  ],
  11: [
    "/images/events/chinnarachittara/1.jpg",
    "/images/events/chinnarachittara/2.jpg",
    "/images/events/chinnarachittara/3.jpg",
  ],
  12: [
    "/images/events/desham/1.jpg",
    "/images/events/desham/2.jpg",
    "/images/events/desham/3.jpg",
    "/images/events/desham/4.jpg",
    "/images/events/desham/5.jpg",
    "/images/events/desham/6.jpg",
    "/images/events/desham/7.jpg",
    "/images/events/desham/8.jpg",
    "/images/events/desham/9.jpg",
    "/images/events/desham/10.jpg",
    "/images/events/desham/11.jpg",
    "/images/events/desham/12.jpg",
    "/images/events/desham/13.jpg",
  ],
  13: [
    "/images/events/drvijaya/1.jpg",
    "/images/events/drvijaya/2.jpg",
    "/images/events/drvijaya/3.jpg",
    "/images/events/drvijaya/4.jpg",
    "/images/events/drvijaya/5.jpg",
  ],
  14: [
    "/images/events/educate/1.jpg",
    "/images/events/educate/2.jpg",
    "/images/events/educate/3.jpg",
    "/images/events/educate/4.jpg",
  ],
  15: [
    "/images/events/girlchildday/1.jpg",
    "/images/events/girlchildday/2.jpg",
  ],
  16: [
    "/images/events/gurupoornima/1.jpg",
    "/images/events/gurupoornima/2.jpg",
    "/images/events/gurupoornima/3.jpg",
    "/images/events/gurupoornima/4.jpg",
  ],
  17: [
    "/images/events/niveditha/1.jpg",
    "/images/events/niveditha/2.jpg",
    "/images/events/niveditha/3.jpg",
    "/images/events/niveditha/4.jpg",
    "/images/events/niveditha/5.jpg",
  ],
  18: [
    "/images/events/public/1.jpg",
    "/images/events/public/2.jpg",
    "/images/events/public/3.jpg",
    "/images/events/public/4.jpg",
    "/images/events/public/5.jpg",
    "/images/events/public/6.jpg",
    "/images/events/public/7.jpg",
    "/images/events/public/8.jpg",
    "/images/events/public/9.jpg",
    "/images/events/public/10.jpg",
    "/images/events/public/11.jpg",
    "/images/events/public/12.jpg",
    "/images/events/public/13.jpg",
    "/images/events/public/14.jpg",
    "/images/events/public/15.jpg",
    "/images/events/public/16.jpg",
    "/images/events/public/17.jpg",
    "/images/events/public/18.jpg",
    "/images/events/public/19.jpg",
    "/images/events/public/20.jpg",
    "/images/events/public/21.jpg",
    "/images/events/public/22.jpg",
    "/images/events/public/23.jpg",
  ],
  19: [
    "/images/events/sanskritclass/1.jpg",
    "/images/events/sanskritclass/2.jpg",
    "/images/events/sanskritclass/3.jpg",
  ],
  20: [
    "/images/events/school/1.jpg",
    "/images/events/school/2.jpg",
    "/images/events/school/3.jpg",
    "/images/events/school/4.jpg",
    "/images/events/school/5.jpg",
  ],
  21: [
    "/images/events/sharadapooja/1.jpg",
    "/images/events/sharadapooja/2.jpg",
    "/images/events/sharadapooja/3.jpg",
    "/images/events/sharadapooja/4.jpg",
    "/images/events/sharadapooja/5.jpg",
    "/images/events/sharadapooja/6.jpg",
    "/images/events/sharadapooja/7.jpg",
    "/images/events/sharadapooja/8.jpg",
  ],
};

const flatImages = Object.values(images).flat();

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % flatImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prev) => (prev - 1 + flatImages.length) % flatImages.length
      );
    }
  };

  const closeModal = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="p-4 md:p-10 bg-gradient-to-br from-orange-100 to-blue-100 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-700">
        Event Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {flatImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Event"
            className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()} // prevent modal close on image click
            >
              <FaTimes
                className="absolute top-2 right-2 text-white text-3xl cursor-pointer z-50"
                onClick={closeModal}
              />
              <FaChevronLeft
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-50"
                onClick={handlePrev}
              />
              <FaChevronRight
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-50"
                onClick={handleNext}
              />
              <FaTimes
                className="absolute top-2 right-2 text-white text-3xl cursor-pointer z-50"
                onClick={closeModal}
              />

              <img
                src={flatImages[selectedIndex]}
                alt="Zoomed Event"
                className="w-full rounded-lg shadow-xl max-h-[95vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
