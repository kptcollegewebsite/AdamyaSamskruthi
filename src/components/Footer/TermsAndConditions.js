import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-red-600">
        Terms & Conditions
      </h1>

      <p className="mb-4">
        Welcome to <strong>Adamya Samskruthi</strong>. By accessing or using
        this website (www.adamyasamskruthi.org), you agree to the following
        terms and conditions. Please read them carefully before using the site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By accessing this website, participating in our programs, or using any
        of our services, you agree to be legally bound by these terms. If you do
        not agree, please do not use the website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Content</h2>
      <p className="mb-4">
        All content on this website, including text, images, videos, and logos,
        is the property of Adamya Samskruthi unless otherwise stated. Content
        may not be copied, reproduced, or distributed without written
        permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Donations & Payments
      </h2>
      <p className="mb-4">
        Donations made to Adamya Samskruthi are voluntary and non-refundable
        unless otherwise specified. We reserve the right to modify or cancel a
        donation in case of suspicious or unauthorized activity.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Event Registrations
      </h2>
      <p className="mb-4">
        Registrations for workshops, events, or classes are subject to
        availability and may be limited. We reserve the right to cancel or
        reschedule events with prior notice to registered participants.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. User Conduct</h2>
      <p className="mb-4">
        Users agree not to engage in any activity that may harm the reputation,
        services, or systems of Adamya Samskruthi. Abuse, spamming, or misuse of
        contact forms is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Third-Party Links</h2>
      <p className="mb-4">
        This website may contain links to external websites. We are not
        responsible for the content or practices of those websites and recommend
        reviewing their terms and privacy policies separately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Limitation of Liability
      </h2>
      <p className="mb-4">
        Adamya Samskruthi is not liable for any direct, indirect, incidental, or
        consequential damages arising from the use of or inability to use this
        website or its services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Modifications to Terms
      </h2>
      <p className="mb-4">
        We reserve the right to update or modify these terms at any time.
        Continued use of the site constitutes acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by the laws of India. Any disputes arising
        shall be handled within the jurisdiction of Karnataka.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-4">
        For any questions about these terms, please contact us at:
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

export default TermsAndConditions;
