import React from "react";

const TreeMission = () => {
  return (
    <section className="text-gray-700 body-font bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold text-green-900 mb-4">
            Our Roots, Our Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inspired by the resilience and wisdom of trees, our mission is to
            grow strong, nurture others, and contribute to a sustainable future
            rooted in values.
          </p>
        </div>

        {/* Tree Graphic + Shloka */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Tree Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/427/427735.png" // Replace with your own SVG/image
              alt="Tree Illustration"
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* Sanskrit Shloka */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <p className="text-xl font-semibold text-green-800 mb-4 leading-relaxed">
              वृक्षाः सप्तसप्तमः प्रतिवेशाः
              <br />
              पुष्पिताः फलिताश्च बहवः
              <br />
              छायां ददति, फलानि च ददति
              <br />न स्वार्थं पृच्छन्ति कदाचित्।
            </p>
            <p className="text-gray-700 text-sm italic">
              “Like trees that offer shade and fruits without expecting anything
              in return, we strive to serve selflessly and grow together with
              all.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeMission;
