import React from "react";

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Disclaimer</h1>

      <p className="mb-4">
        The information provided on this website (
        <strong>www.adamyasamskruthi.org</strong>) is for general informational
        and educational purposes only. While we strive to keep the information
        up to date and correct, Adamya Samskruthi makes no representations or
        warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, or suitability of the content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Educational and Cultural Content
      </h2>
      <p className="mb-4">
        The resources, programs, and materials shared are intended to promote
        cultural learning, educational development, and social awareness. They
        are not intended to substitute professional advice (legal, medical, or
        psychological).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. External Links</h2>
      <p className="mb-4">
        This website may contain links to external websites that are not
        provided or maintained by Adamya Samskruthi. We do not guarantee the
        accuracy, relevance, timeliness, or completeness of any information on
        these third-party sites. Users are advised to review their terms and
        privacy policies separately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Event Participation
      </h2>
      <p className="mb-4">
        Participation in events, workshops, or programs organized by Adamya
        Samskruthi is voluntary. We are not liable for any personal loss,
        injury, or inconvenience caused during or after such activities. Parents
        and guardians are responsible for the participation of children or
        minors.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Donations</h2>
      <p className="mb-4">
        All donations made to Adamya Samskruthi are voluntary and non-refundable
        unless specified otherwise. We are not responsible for errors caused due
        to incorrect payment details entered by the donor.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. No Warranties</h2>
      <p className="mb-4">
        While we do our best to ensure this website is running smoothly, Adamya
        Samskruthi takes no responsibility for the website being temporarily
        unavailable due to technical issues beyond our control.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Use at Your Own Risk
      </h2>
      <p className="mb-4">
        Any reliance placed on the content of this website is strictly at the
        user's own risk. Adamya Samskruthi will not be liable for any loss or
        damage including without limitation, indirect or consequential loss or
        damage.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Changes to This Disclaimer
      </h2>
      <p className="mb-4">
        We may revise this disclaimer from time to time. All updates will be
        posted on this page. Continued use of the website after changes are made
        will constitute acceptance of those changes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        For any clarification or concerns regarding this disclaimer, kindly
        contact us at:
        <br />
        <span className="text-red-600 font-medium">
          adamyasamskruthi@gmail.com
        </span>
      </p>

      <p className="text-sm text-gray-500 mt-8 italic">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default Disclaimer;
