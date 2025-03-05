"use client";
import React from 'react';

export const ServiceCard = ({ service, image }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={service} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service}</h3>
        <button onClick={() => window.location.href = 'https://www.galaxyeducation.org/courses'} className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg">
  Learn More
</button>
      </div>
    </div>
  );
};