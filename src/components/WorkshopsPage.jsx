import React, { useState } from "react";

const workshops = [
  {
    title: "Kargil Victory Celebration",
    description:
      "A patriotic event held to honor the brave soldiers of the Indian Armed Forces. Students participated in flag hoisting, patriotic song performances, and inspirational speeches.",
    images: ["/images/vtu.png", "/images/kargil2.jpg", "/images/kargil3.jpg"],
  },
  {
    title: "Temple Place Cleaning",
    description:
      "Volunteers engaged in seva by cleaning temple surroundings, promoting hygiene, environmental consciousness, and the spirit of selfless service in community spaces.",
    images: ["/images/vtu.png", "/images/vtu.png", "/images/temple3.jpg"],
  },
  {
    title: "Children Residential Workshop",
    description:
      "A 3-day immersive workshop where children experienced character-building activities, yoga, stories from Indian epics, bhajans, games, and value education in a joyful residential setting.",
    images: ["/images/vtu.png", "/images/vtu.png", "/images/vtu.png"],
  },
];

const WorkshopsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-slate-50 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Our Workshops</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Inspiring youth through experiential learning, seva, and cultural
            immersion.
          </p>
        </div>

        {workshops.map((workshop, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              {workshop.title}
            </h2>
            <p className="text-gray-700 mb-4">{workshop.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {workshop.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${workshop.title} ${idx + 1}`}
                  className="rounded-lg cursor-pointer hover:opacity-90 shadow"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkshopsPage;
