import React from "react";

const programs = [
  {
    id: "ramarajya",
    title: "Ramarajya",
    description:
      "Ramarajya represents the ideal state rooted in dharma, justice, and harmony. This program instills timeless Indian values, civic responsibility, and cultural pride among students.",
    images: [
      "/images/vtu.png",
      "/images/ramarajya2.jpg",
      "/images/ramarajya3.jpg",
    ],
  },
  {
    id: "sadhaka",
    title: "Sadhaka Parichaya Varga",
    description:
      "Sadhaka Parichaya Varga introduces participants to the foundational teachings and disciplines of a committed Sadhaka. The program includes structured classroom sessions, activities, and self-discovery exercises.",
    images: [
      "/images/sadhaka1.jpg",
      "/images/sadhaka2.jpg",
      "/images/sadhaka3.jpg",
    ],
  },
  {
    id: "raksha-bandhana",
    title: "Raksha Bandhana",
    description:
      "Celebrating the sacred bond between individuals and society, the Raksha Bandhana program includes tying rakhis, promoting mutual respect, unity, and national brotherhood through meaningful student interactions.",
    images: [
      "/images/raksha1.jpg",
      "/images/raksha2.jpg",
      "/images/raksha3.jpg",
    ],
  },
];

const ProgramsPage = () => {
  return (
    <section className="py-20 bg-slate-50 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Our Programs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Engaging minds and hearts through value-based programs rooted in our
            cultural ethos.
          </p>
        </div>

        {programs.map((program, index) => (
          <div
            key={program.id}
            className={`grid md:grid-cols-2 gap-8 mb-16 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div>
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                {program.title}
              </h2>
              <p className="text-gray-700">{program.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {program.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${program.title} ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsPage;
