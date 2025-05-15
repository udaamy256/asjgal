"use client";

import Head from "next/head";
import Link from "next/link";
import Logo from "./Logo";
import { YoutubeIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from "@/utils/Icons";
import siteMetadata from "@/utils/siteMetaData";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);              // Mobile nav toggle
  const [mobileCatOpen, setMobileCatOpen] = useState(false); // Mobile category submenu toggle
  const [isOpen, setIsOpen] = useState(false);             // Desktop dropdown toggle

  const toggle = () => {
    setClick(!click);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        <title>Epics Solution | Online Courses & Blogs</title>
        <meta
          name="description"
          content="Empowering students with the best global online courses and skill-building resources."
        />
        <meta property="og:title" content="Epics Solution | Online Courses & Blogs" />
        <meta
          property="og:description"
          content="Empowering students with the best global online courses and skill-building resources."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Epics Solution | Online Courses & Blogs" />
      </Head>

      <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between bg-gray-600 shadow-sm relative z-50">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Logo />

          {/* Hamburger Menu for Mobile */}
          <button
            className="inline-block sm:hidden z-50"
            onClick={toggle}
            aria-label="Menu"
          >
            <div className="w-8 cursor-pointer transition-all ease duration-300 relative h-6">
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-gray-800 rounded transition-all ease duration-200 ${
                  click ? "rotate-45 translate-y-2" : "translate-y-1"
                }`}
              />
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-gray-800 rounded transition-all ease duration-200 ${
                  click ? "opacity-0" : "opacity-100 translate-y-3"
                }`}
              />
              <span
                className={`absolute top-0 left-0 w-full h-0.5 bg-gray-800 rounded transition-all ease duration-200 ${
                  click ? "-rotate-45 translate-y-2" : "translate-y-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Navigation Menu for Mobile */}
        <nav
          className={`${
            click ? "left-0" : "-left-full"
          } w-3/4 py-8 px-6 font-medium capitalize fixed top-0 bottom-0 bg-white text-gray-800 transition-all ease duration-300 z-40 shadow-lg sm:hidden`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={toggle}
              className="self-end p-2 text-2xl text-gray-600 hover:text-gray-800"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col items-start space-y-6 mt-8">
              <li>
                <Link
                  href="/"
                  onClick={toggle}
                  className="hover:text-blue-600 transition-colors duration-200 text-amber-50"
                >
                  Home
                </Link>
              </li>

              <li>
                <div>
                  <button
                    className="w-full flex justify-between items-center font-semibold mb-1"
                    onClick={() => setMobileCatOpen(!mobileCatOpen)}
                    aria-expanded={mobileCatOpen}
                    aria-controls="mobile-universities-submenu"
                  >
                    Universities <span className="text-xs">{mobileCatOpen ? "▴" : "▾"}</span>
                  </button>
                  {mobileCatOpen && (
                    <div
                      id="mobile-universities-submenu"
                      className="space-y-1 pl-4"
                    >
                      <Link href="/uni" onClick={toggle} className="block hover:text-pink-500">
                        Study in UK
                      </Link>
                      <Link href="/Germany" onClick={toggle} className="block hover:text-pink-500">
                        Study in Germany
                      </Link>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link
                  href="/courses"
                  onClick={toggle}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/Success"
                  onClick={toggle}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={toggle}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden sm:flex items-center space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-pink-600 transition flex items-center space-x-1"
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls="desktop-universities-dropdown"
            >
              <span>Universities</span>
              <span className="text-xs">▾</span>
            </button>
            {isOpen && (
              <div
                id="desktop-universities-dropdown"
                className="absolute left-0 mt-2 bg-white border rounded-md shadow-md p-2 w-56 z-50 space-y-1"
                role="menu"
              >
                <Link href="/uni" className="block hover:text-pink-500" role="menuitem">
                  Study in UK
                </Link>
                <Link href="/Germany" className="block hover:text-pink-500" role="menuitem">
                  Study in Germany
                </Link>
              </div>
            )}
          </div>

          <Link href="/courses" className="hover:text-blue-600 transition-colors duration-200">
            Courses
          </Link>
          <Link href="/Success" className="hover:text-blue-600 transition-colors duration-200">
            Success Stories
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={siteMetadata.linkedin}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
          </a>
          <a
            href={siteMetadata.facebook}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
          </a>
          <a
            href={siteMetadata.youtube}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
          </a>
          <a
            href={siteMetadata.instagram}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors duration-200" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
