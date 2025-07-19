import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const galleryImages = [
  "/images/events/booksdistribution/1.jpg",
  "/images/events/booksdistribution/7.jpg",
  "/images/events/booksdistribution/8.jpg",
  "/images/events/booksdistribution/9.jpg",
  "/images/events/clothesdistribution/1.jpg",
  "/images/events/clothesdistribution/2.jpg",
  "/images/events/freedomfighterbooks/2.jpg",
  "/images/events/freedomfighterbooks/3.jpg",
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
  "/images/events/kalinali/19.jpg",
  "/images/events/kalinali/20.jpg",
  "/images/events/kalinali/21.jpg",
  "/images/events/kalinali/22.jpg",
  "/images/events/kalinali/23.jpg",
  "/images/events/kalinali/24.jpg",
  "/images/events/kalinali/25.jpg",
  "/images/events/kargil/1.jpg",
  "/images/events/kargil/2.jpg",
  "/images/events/kargil/5.jpg",
  "/images/events/kargil/6.jpg",
  "/images/events/notebookdistribution/1.jpg",
  "/images/events/notebookdistribution/2.jpg",
  "/images/events/notebookdistribution/3.jpg",
  "/images/events/notebookdistribution/8.jpg",
  "/images/events/notebookdistribution/9.jpg",
  "/images/events/templecleaning/1.jpg",
  "/images/events/templecleaning/2.jpg",
  "/images/events/templecleaning/7.jpg",
  "/images/events/vanavasiseva/1.jpg",
  "/images/events/vanavasiseva/2.jpg",
  "/images/events/vanavasiseva/7.jpg",
  "/images/events/abhimani/2.jpg",
  "/images/events/achieversintro/1.jpg",
  "/images/events/achieversintro/2.jpg",
  "/images/events/achieversintro/4.jpg",
  "/images/events/chinnarachittara/1.jpg",
  "/images/events/chinnarachittara/3.jpg",
  "/images/events/desham/1.jpg",
  "/images/events/desham/12.jpg",
  "/images/events/desham/13.jpg",
  "/images/events/drvijaya/4.jpg",
  "/images/events/drvijaya/5.jpg",
  "/images/events/educate/1.jpg",
  "/images/events/educate/4.jpg",
  "/images/events/girlchildday/1.jpg",
  "/images/events/girlchildday/2.jpg",
  "/images/events/gurupoornima/1.jpg",
  "/images/events/gurupoornima/4.jpg",
  "/images/events/niveditha/1.jpg",
  "/images/events/niveditha/5.jpg",
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
  "/images/events/sanskritclass/1.jpg",
  "/images/events/sanskritclass/3.jpg",
  "/images/events/school/1.jpg",
  "/images/events/school/4.jpg",
  "/images/events/school/5.jpg",
  "/images/events/sharadapooja/1.jpg",
  "/images/events/sharadapooja/2.jpg",
  "/images/events/sharadapooja/3.jpg",
  "/images/events/sharadapooja/8.jpg",
];

export default function GallerySnapshots() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Glimpses from Our Gallery
        </h2>
        <p className="text-gray-600 mb-10">
          Moments of joy, culture, and service captured across our initiatives.
        </p>
      </motion.div>

      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <style>{`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
          .marquee-track {
            animation: slide 480s linear infinite;
          }
        `}</style>

        <div className="flex gap-6 w-max marquee-track">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="min-w-[300px]">
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="rounded-lg shadow-md object-cover h-64 w-full"
              />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-6 space-x-1">
          {galleryImages.map((_, idx) => (
            <span
              key={idx}
              className="h-2 w-2 bg-gray-400 rounded-full inline-block"
            ></span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
