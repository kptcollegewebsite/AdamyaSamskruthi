import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Aashraya",
    subtitle: "Protective Community / Home",
    description:
      "A safe, nurturing space for children and families where support and care form the foundation.",
    images: [
      "/images/events/public/21.jpg",
      "/images/events/public/22.jpg",
      "/images/events/public/23.jpg",
    ],
    story:
      "During lockdown, we provided shelter and meals to over 40 children in need.",
  },
  {
    title: "Shikshana",
    subtitle: "Education and Mentoring",
    description:
      "Empowering youth through learning, mentorship, and life skill training.",
    images: [
      "/images/events/school/1.jpg",
      "/images/events/school/2.jpg",
      "/images/events/school/3.jpg",
      "/images/events/school/4.jpg",
      "/images/events/school/5.jpg",
    ],
    story:
      "Our evening tuition classes helped 30+ children pass with distinction.",
  },
  {
    title: "Kala-Pravinyathe",
    subtitle: "Encouraging Arts and Culture",
    description:
      "Nurturing artistic talent in dance, music, and theatre for holistic growth.",
    images: [
      "/images/events/desham/1.jpg",
      "/images/events/desham/1.jpg",
      "/images/events/desham/1.jpg",
      "/images/events/desham/1.jpg",
    ],
    story:
      "Annual cultural fest featured over 100 child performers in classical dance and drama.",
  },
  {
    title: "Samskara",
    subtitle: "Cultural Refinement, Values & Discipline",
    description:
      "Instilling values through stories, bhajans, festivals, and moral lessons.",
    images: [
      "/images/events/sharadapooja/2.jpg",
      "/images/events/sharadapooja/3.jpg",
      "/images/events/sharadapooja/4.jpg",
      "/images/events/sharadapooja/5.jpg",
    ],
    story:
      "Sharada Pooja taught 60 children traditional customs and respect for elders.",
  },
  {
    title: "Udyama-Sheelathe",
    subtitle: "Professional Ethics and Self-Reliance",
    description:
      "Training for careers, entrepreneurship, and independence with dignity.",
    images: [
      "/images/events/girlchildday/1.jpg",
      "/images/events/niveditha/4.jpg",
      "/images/events/abhimani/1.jpg",
      "/images/events/drvijaya/1.jpg",
    ],
    story: "Our tailoring workshops enabled 10 women to start home businesses.",
  },
];

export default function PanchaTatva() {
  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-6 animate-pulse">
        🕉 Pancha Tatva
      </h2>
      <p className="max-w-3xl text-center mx-auto text-gray-600 mb-10">
        The philosophy of Pancha Tatva represents five essential pillars guiding
        our service: care, learning, creativity, culture, and self-reliance.
      </p>

      <div className="space-y-14">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } max-w-6xl mx-auto bg-red-50 rounded-xl shadow overflow-hidden`}
          >
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden relative h-64">
                <div
                  className="absolute flex animate-scroll-images w-max h-full"
                  style={{ animation: "scrollImages 25s linear infinite" }}
                >
                  {pillar.images.concat(pillar.images).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${pillar.title} ${i}`}
                      className="w-64 h-64 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 text-center md:text-left md:w-1/2">
              <h3 className="text-2xl font-extrabold text-red-800">
                {pillar.title}{" "}
                <span className="block text-sm font-medium text-gray-600">
                  {pillar.subtitle}
                </span>
              </h3>
              <p className="text-gray-700 mt-3">{pillar.description}</p>
              <p className="text-sm italic text-gray-500 mt-2">
                {pillar.story}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes scrollImages {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-images img {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
}
