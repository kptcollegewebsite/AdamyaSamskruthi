import React from "react";
import { FaUniversity, FaQrcode, FaExternalLinkAlt } from "react-icons/fa";

const DonationMethods = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Donation Methods
        </h2>

        {/* UPI QR */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 flex flex-col items-center shadow-md">
          <FaQrcode className="text-4xl text-red-500 mb-4" />
          <p className="text-gray-700 text-center mb-4 font-medium">
            Scan the UPI QR code to donate
          </p>
          <img
            src="/images/upipay.png"
            alt="UPI QR Code"
            className="w-52 h-52 object-contain border rounded"
          />
          <p className="text-sm text-gray-500 mt-2">
            UPI ID: adamyasanskriti@upi
          </p>
        </div>

        {/* Bank Transfer */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaUniversity className="text-xl text-red-500" />
            <h3 className="text-lg font-semibold text-red-600">
              Bank Transfer
            </h3>
          </div>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>
              <strong>Account Name:</strong> Adamya Samskruthi Seva Trust
            </li>
            <li>
              <strong>Account Number:</strong> 7869584317
            </li>
            <li>
              <strong>Bank Name:</strong> INDIAN BANK
            </li>
            <li>
              <strong>Branch:</strong> Banashankari II stage , Bengaluru
            </li>
            <li>
              <strong>IFSC:</strong> IDIB000B074
            </li>
          </ul>
        </div>

        {/* External / Offline Options */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <FaExternalLinkAlt className="text-xl text-red-500" />
            <h3 className="text-lg font-semibold text-red-600">
              Other Ways to Donate
            </h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">
            Donations can also be made offline by visiting our center or during
            events.
          </p>
          <a
                  href="tel:+919606089600"
            className="inline-block mt-2 text-sm text-red-600 hover:underline"
          >
            Click here to call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationMethods;
