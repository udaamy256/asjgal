"use client"

import Image from 'next/image';
import MoreInfoButton from '@/components/moreinfo/page';
import HomePage1 from '@/components/Homepage/page';
import VisaServicesSection from '@/components/visitvisa/page';
import VisaConsultancySection from '@/components/country/page';

export default function HomePage() {
  const faqs = [
    {
      question: 'How can Galaxy Consultants help with my visa application?',
      answer: 'We provide expert guidance and support to ensure a smooth and successful visa process.',
    },
    {
      question: 'What makes Galaxy Consultants different from other visa agencies?',
      answer: 'Our personalized approach and years of experience set us apart from others.',
    },
    {
      question: 'How long does the visa process take with Galaxy Consultants?',
      answer: 'The processing time varies depending on the country and visa type, but we aim to provide fast and efficient service.',
    },
    {
      question: 'Do I need to visit Galaxy Consultants in person for visa assistance?',
      answer: 'No, we offer remote consultation and online processing to serve clients globally.',
    },
    {
      question: 'Can Galaxy Consultants help with visa applications for multiple countries?',
      answer: 'Yes, we offer visa assistance for multiple countries with expert guidance.',
    },
  ];

  const testimonials = [
    {
      name: 'Amurzish Nawaz',
      review: 'I had the pleasure of working with GALAXY Consultancy for my student visa application. They made the whole process so much easier and less stressful.  The team was very thorough in reviewing my application, and their expertise ensured that I didn’t miss anything important. I received my student  visa approval faster than expected, and I’m thankful for their guidance. They are highly professional, reliable, and efficient—definitely the best people for any visa-related needs. I highly recommend them to anyone looking for visa assistance!.',
    },
    {
      name: 'Muhammad Sajjad',
      review: 'Galaxy consultancy is the best consultancy in Pakistan. The staff is sincere, honest and approachable every time. I suggested and will suggest it to others also Thank you Galaxy for your wonderful consultancy',
    },
    {
      name: 'Abuzar khan',
      review: 'I am satisfied of thier services And the way they ready me for university and embassy interview so I am highly recommend Galaxy consultancy to all the students',
    },
  ];

  

  return (
    <div className="bg-gray-100">
      <section className="relative h-[500px]">
        <div style={{ minHeight: '400px', width: '100%' }}>
          <HomePage1 />
        </div>
      </section>

      <section>
        <VisaConsultancySection />
      </section>

      {/* Services Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Dedicated to Delivering the Best Services for Your Global Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          {['UG Study visa', 'PG Study visa', 'Short-Term Study Visas'].map((service, index) => (
            <div key={index} className="text-left">
              <h3 className="text-xl font-semibold mb-3">✔ {service}</h3>
              <p className="text-sm">
                Explore the world effortlessly with our efficient visa processing for countries worldwide.
              </p>
            </div>
          ))}
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg mt-8"
          onClick={() => window.location.href = 'https://maps.app.goo.gl/jzcKQm982JkLbmV77'}
        >
          Get Started
        </button>
      </section>

      {/* Visa Services Section */}
      <section className="py-16 bg-white text-center">
        <VisaServicesSection />
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 flex items-center justify-center">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/social-banner.png"
              alt="About Us"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">We help Making your dream into Reality</h2>
            <p className="text-lg mb-4">
              Galaxy Consultants was created to provide uniquely designed premium services in the field of education.
            </p>
            <ul className="list-disc pl-6 text-lg">
              <li>Checking Visa Eligibility</li>
              <li>Fast Visa Processing with Experts</li>
              <li>Approved Exam Facilitation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#FCECEC] py-20">
        <div className="text-center mb-10">
          <span className="text-red-600 text-sm uppercase">Why Choose Us</span>
          <h2 className="text-4xl font-bold mt-2">Expert Visa Consultancy</h2>
          <p className="text-lg text-gray-700">Guiding You Every Step of the Way</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <span className="text-red-600 uppercase text-sm tracking-wide">Creating Great Opportunities</span>
            <h3 className="text-2xl font-bold mt-4 mb-2">We help Making your dream into Reality</h3>
            <span className="text-4xl text-red-600 font-bold">4.9</span>
            <p className="text-sm text-gray-700 mt-2">★★★★★</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            {[{
              title: 'Your Dream, Our Priority',
              description: 'We turn your global travel dreams into reality with trusted, efficient visa solutions designed just for you.',
              icon: '🤝',
            }, {
              title: 'Creating Bright Futures',
              description: 'Helping individuals and families build better futures through smooth, stress-free visa services.',
              icon: '✈️',
            }, {
              title: 'Connecting the World',
              description: 'Bringing you all-inclusive visa solutions, no matter where you’re from or where you’re going.',
              icon: '🌍',
            }, {
              title: 'Expert Visa Handling',
              description: 'With decades of experience, we manage visa applications with precision across all categories.',
              icon: '📄',
            }].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center p-10">
          {[{ number: '5000+', label: 'Happy Clients' }, { number: '20+', label: 'Countries Served' }, { number: '4000+', label: 'Study Visa Success' }, { number: '100%', label: 'Client Satisfaction' }].map((stat, index) => (
            <div key={index} className="p-4">
              <h4 className="text-3xl text-red-600 font-bold">{stat.number}</h4>
              <p className="text-sm text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ & Appointment Section */}
      <section className="bg-[#0F233F] py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-10 text-white">
          <div>
            <span className="text-red-600 uppercase text-sm font-semibold">Frequently Asked Questions</span>
            <h2 className="text-4xl font-bold mt-2 mb-10">Questions & Answer</h2>

            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-semibold">Q{index + 1}. {faq.question}</h3>
                  <span className="text-lg">{index === 0 ? '▼' : '▶'}</span>
                </div>
                {index === 0 && <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>}
              </div>
            ))}
          </div>

          <div className="bg-red-600 p-10 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Book An Appointment</h2>
            <p className="mb-6 text-sm">Please fill out the details below to schedule an appointment with one of our consultants:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Select Country" className="p-3 rounded-md w-full" />
              <input type="text" placeholder="Select Service" className="p-3 rounded-md w-full" />
              <input type="text" placeholder="Your Full Name" className="p-3 rounded-md w-full" />
              <input type="text" placeholder="Phone" className="p-3 rounded-md w-full" />
            </div>
            <button className="bg-white text-red-600 hover:bg-gray-200 px-6 py-3 rounded-lg mt-6 w-full">CONTACT US</button>
            <p className="text-center text-sm mt-4">Our support center is <span className="font-bold">available 24/7</span> for your convenience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#FCECEC] text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-lg italic">"{testimonial.review}"</p>
              <h3 className="text-xl font-semibold mt-4">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
    </div>
  );
}