import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Adamya Samskruthi</strong>, we are committed to protecting
        the privacy and personal information of all visitors, students,
        volunteers, and donors who interact with our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect basic personal information such as name, email address,
        phone number, and location when users:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Fill out contact or registration forms</li>
        <li>Make a donation or volunteer request</li>
        <li>Subscribe to our newsletters or updates</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">Your data may be used to:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Respond to inquiries or feedback</li>
        <li>Provide information about our programs and activities</li>
        <li>Send updates, newsletters, or event notifications</li>
        <li>Maintain donor or volunteer records securely</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We do not sell, trade, or share your personal information with any
        third-party organizations. All information is stored securely and only
        used for the purposes described above.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        Our website may use cookies for basic analytics and improving user
        experience. Users may disable cookies through browser settings if
        desired.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. External Links</h2>
      <p className="mb-4">
        This site may contain links to external websites. We are not responsible
        for the content or privacy practices of those sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Children’s Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect personal information from children under the
        age of 13. If such data is submitted by mistake, it will be removed upon
        request.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Consent</h2>
      <p className="mb-4">
        By using our website, users consent to this privacy policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Changes to this Policy
      </h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. All updates will be
        posted on this page with the date of the last update.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        For any questions or requests regarding your data, please contact us at:
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

export default Privacy;
