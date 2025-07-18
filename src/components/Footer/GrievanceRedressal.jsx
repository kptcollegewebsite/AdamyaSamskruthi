import React from "react";

const GrievanceRedressal = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-red-600">
        Grievance Redressal
      </h1>

      <p className="mb-4">
        At <strong>Adamya Samskruthi</strong>, we are committed to providing
        transparent, ethical, and accountable services. We welcome feedback and
        aim to address concerns in a prompt and respectful manner.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Purpose</h2>
      <p className="mb-4">
        This Grievance Redressal mechanism is designed to address issues or
        complaints raised by students, parents, volunteers, donors, or members
        of the public who interact with our programs or services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. What Can Be Reported?
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Issues related to our educational programs or workshops</li>
        <li>Concerns regarding staff behavior or ethical practices</li>
        <li>Complaints about donation handling or transparency</li>
        <li>Accessibility issues or website-related difficulties</li>
        <li>Any other relevant concern affecting trust and safety</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. How to Submit a Grievance
      </h2>
      <p className="mb-4">
        Complaints can be submitted via email or phone. Please include clear
        details such as:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Full name and contact information</li>
        <li>Date of incident or concern</li>
        <li>A clear description of the issue</li>
        <li>Any supporting documents or screenshots (if applicable)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Contact for Grievance
      </h2>
      <p className="mb-4">
        Email:{" "}
        <a
          href="mailto:adamyasamskruthi@gmail.com"
          className="text-red-600 font-medium"
        >
          adamyasamskruthi@gmail.com
        </a>
        <br />
        Phone:{" "}
        <a href="tel:+919606089600" className="text-red-600 font-medium">
          +91 96060 89600
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Review Process</h2>
      <p className="mb-4">
        All grievances will be acknowledged within 3 working days. Based on the
        nature of the issue, appropriate action will be taken and communicated
        within 15 working days.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Confidentiality</h2>
      <p className="mb-4">
        All complaints will be handled with complete confidentiality. Personal
        data will only be used to process and respond to the grievance.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Escalation</h2>
      <p className="mb-4">
        If the grievance remains unresolved, it may be escalated to the Core
        Committee of Adamya Samskruthi for further review.
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

export default GrievanceRedressal;
