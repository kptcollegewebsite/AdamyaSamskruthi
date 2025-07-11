import React from "react";
import { HeartHandshake, BookOpenCheck, Leaf, Globe } from "lucide-react";

const MissionPage = () => {
  const missions = [
    {
      title: "Empower Through Education",
      icon: <BookOpenCheck className="w-10 h-10 text-indigo-600" />,
      desc: "We aim to provide quality and accessible learning opportunities for all students, especially from underprivileged communities.",
    },
    {
      title: "Promote Environmental Awareness",
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      desc: "Our mission includes instilling values of sustainability and encouraging eco-friendly practices among the youth.",
    },
    {
      title: "Build Global Citizenship",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      desc: "We strive to nurture globally aware and responsible individuals who contribute positively to society.",
    },
    {
      title: "Foster Compassion & Ethics",
      icon: <HeartHandshake className="w-10 h-10 text-pink-600" />,
      desc: "We believe in character-building by promoting empathy, inclusiveness, and moral values.",
    },
  ];

  return (
    <section className="text-gray-800 body-font bg-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Our Mission
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to creating a positive impact through education,
            environmental responsibility, ethics, and global engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionPage;
