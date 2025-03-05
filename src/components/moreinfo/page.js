"use client";

import React, { useState } from "react";

const MoreInfoButton = ({ text = "More Info", onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
    if (onClick) onClick(); // Call the parent’s onClick if provided
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        onClick={handleClick}
      >
        {text}
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 relative">
            <h2 className="text-2xl font-bold mb-4">Reach Out for Visa Guidance!</h2>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreInfoButton;