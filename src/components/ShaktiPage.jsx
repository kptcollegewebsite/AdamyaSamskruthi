import React from "react";
import { Lightbulb, Sparkles, Hammer } from "lucide-react";

const ShaktiPage = () => {
  const powers = [
    {
      title: "Jnana-shakti (Power of Knowledge)",
      icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
      desc: "Jnana-shakti refers to the power of wisdom, understanding, and insight. It is the intellectual force that guides right decisions and clarity of purpose.",
    },
    {
      title: "Ichha-shakti (Power of Will)",
      icon: <Sparkles className="w-10 h-10 text-purple-500" />,
      desc: "Ichha-shakti represents the power of intention, desire, and determination. It is the inner strength that drives goals and dreams.",
    },
    {
      title: "Kriya-shakti (Power of Action)",
      icon: <Hammer className="w-10 h-10 text-blue-500" />,
      desc: "Kriya-shakti is the power to act and manifest thoughts into reality. It reflects productivity, execution, and transformation.",
    },
  ];

  return (
    <section className="text-gray-800 body-font bg-gradient-to-br from-white via-slate-50 to-gray-100 py-20">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            The Three Divine Powers
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            In Indian philosophy, every being is empowered by three fundamental
            forces: Jnana-shakti, Ichha-shakti, and Kriya-shakti. These guide
            knowledge, will, and action respectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {powers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-center"
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

export default ShaktiPage;
