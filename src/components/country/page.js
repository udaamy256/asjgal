import React from 'react';
import Image from 'next/image';

const VisaConsultancySection = () => {
  const countries = [
    { name: 'USA', flag: '/usa-flag.png', description: 'US Study Visa Consultancy', color: 'bg-blue-700' },
    { name: 'UK', flag: '/uk-flag.png', description: 'UK Study Visa Consultancy', color: 'bg-blue-800' },
    { name: 'CANADA', flag: '/canada-flag.png', description: 'Canada Study Visa Consultancy', color: 'bg-red-700' },
    { name: 'AUSTRALIA', flag: '/australia-flag.png', description: 'Australia Study Visa Consultancy', color: 'bg-blue-900' },
    { name: 'NEW ZEALAND', flag: '/newzealand-flag.png', description: 'New Zealand Study Visa Consultancy', color: 'bg-blue-800' },
    { name: 'FRANCE', flag: '/france-flag.png', description: 'France Study Visa Consultancy', color: 'bg-blue-600' },
    { name: 'SPAIN', flag: '/spain-flag.png', description: 'Spain Study Visa Consultancy', color: 'bg-red-600' },
  ];

  const handleContactClick = () => {
    window.location.href = 'https://www.galaxyeducation.org/contact';
  };

  return (
    <section className="w-full max-w-7xl mx-auto p-6 bg-gray-300">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Gateway to Global Education</h1>
        <p className="text-xl text-gray-600">Effortless Visas, Endless Possibilities for your international education journey.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <div
            key={country.name}
            className={`h-72 ${country.color} flex flex-col items-center justify-center text-white rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl`}
          >
            <Image
              src={country.flag}
              alt={`${country.name} flag`}
              width={64}
              height={64}
              className="w-16 h-16 mb-4 rounded-full border-2 border-white shadow-sm"
            />
            <h3 className="text-xl font-bold">{country.name}</h3>
            <p className="text-sm mt-2 text-center px-4">{country.description}</p>
            <button
              onClick={handleContactClick}
              className="mt-4 bg-white text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`Contact Us for ${country.name} Visa Consultancy`}
            >
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaConsultancySection;