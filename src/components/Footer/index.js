"use client";
import React from "react";
import Logo from "../Header/Logo";
import { YoutubeIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from "@/utils/Icons";
import siteMetadata from "@/utils/siteMetaData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section: Logo and Description */}
        <div className="flex items-center mb-8">
          <Logo />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-white">Galaxy Consultants</h2>
            <p className="text-sm text-gray-400 mt-1">
              Your trusted partner for global education and visa services.
            </p>
          </div>
        </div>

        {/* Middle Section: Offices and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Office Addresses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Offices</h3>
            <div className="mb-4">
              <p>Build. 25, D-Block, Faisal Town Main Boulevard, Lahore, Pakistan.</p>
              <p>📞 +92 300-0265943</p>
            </div>
           
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={siteMetadata.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href={siteMetadata.facebook}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href={siteMetadata.youtube}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href={siteMetadata.instagram}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-md transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Divider and Copyright Notice */}
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-sm text-gray-400">
          © 2017 Galaxy Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;