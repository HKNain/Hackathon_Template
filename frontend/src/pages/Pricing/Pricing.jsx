import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Free Tier */}
        <div className="flex-1 bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-teal-200 mb-4">Free Tier</h2>
          <p className="text-teal-300 mb-6 text-center">
            Perfect for individuals getting started.
          </p>
          <ul className="text-orange-200 space-y-3 mb-8">
            <li>✔️ Basic Features</li>
            <li>✔️ Limited Support</li>
            <li>✔️ Community Access</li>
          </ul>
          <div className="text-4xl font-extrabold text-orange-300 mb-2">₹0</div>
          <div className="text-orange-100">per month</div>
        </div>
        {/* Paid Tier */}
        <div className="flex-1 bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-teal-300">
          <h2 className="text-3xl font-bold text-teal-200 mb-4">Pro Tier</h2>
          <p className="text-teal-300 mb-6 text-center">
            For professionals and teams needing more.
          </p>
          <ul className="text-orange-200 space-y-3 mb-8">
            <li>✔️ Basic Features</li>
            <li>✔️ Limited Support</li>
            <li>✔️ Community Access</li>
            <li className="text-teal-200">✨ Priority Support</li>
            <li className="text-teal-200">✨ Advanced Analytics</li>
            <li className="text-teal-200">✨ Unlimited Projects</li>
          </ul>
          <div className="text-4xl font-extrabold text-orange-300 mb-2">
            ₹499
          </div>
          <div className="text-orange-100">per month</div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
