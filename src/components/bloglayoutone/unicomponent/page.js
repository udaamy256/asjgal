"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Head from "next/head";

const UniComponent1 = () => {
  const [universities, setUniversities] = useState([]);

  // Fetch university data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type=="university"]{
          description,
          "slug": slug.current,
          image,
          title,
          href,
          tags,
          content,
          heading1,
          heading2,
          publishedAt
        }
      `;
      const result = await client.fetch(query);
      setUniversities(result);
    };

    fetchData();
  }, []);

  // Set dynamic image URL for meta tags with a fallback
  const firstUniversityImageUrl = universities[0]?.image
    ? urlFor(universities[0].image).url()
    : "/default-image.jpg";

  return (
    <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center">
      {/* SEO and Open Graph Meta Tags */}
      <Head>
        <title>Universities | Galaxy Education</title>
        <meta name="description" content="Explore universities and their detailed information." />
        <meta property="og:title" content="Universities | Galaxy Education" />
        <meta property="og:description" content="Explore universities and their detailed information on Galaxy Education." />
        <meta property="og:image" content={firstUniversityImageUrl} />
        <meta property="og:url" content="https://www.galaxyeducation.org/university" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Universities | Galaxy Education" />
        <meta name="twitter:description" content="Explore universities and their detailed information." />
        <meta name="twitter:image" content={firstUniversityImageUrl} />
      </Head>

      {/* Heading */}
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Universities
        </h2>
      </div>

      {/* University Grid */}
      <div className="mt-8 md:mt-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {universities.length > 0 ? (
            universities.map((uni) => (
              <article
                key={uni.slug}
                className="flex flex-col items-center justify-between rounded-lg shadow-lg bg-light dark:bg-dark overflow-hidden group hover:scale-105 transition-transform duration-500"
              >
                {/* Image Section */}
                <div className="relative w-full h-[250px] sm:h-[165px] md:h-[200px] overflow-hidden">
                  {uni.image ? (
                    <Image
                      src={urlFor(uni.image).url()}
                      alt={uni.title || "University image"}
                      width={500}
                      height={300}
                      className="transition-transform duration-500 transform group-hover:scale-110 object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                      <span className="text-dark/70 dark:text-light/70">
                        Image not available
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between gap-y-1 p-2 w-full">
                  {uni.tags && uni.tags.length > 0 && (
                    <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                      {uni.tags[0]}
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-center text-dark dark:text-light leading-tight mb-1 line-clamp-2">
                    {uni.title || "Untitled University"}
                  </h2>
                  <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base mt-2">
                    {uni.publishedAt
                      ? new Date(uni.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Date not available"}
                  </span>
                  <Link href={`/university/${uni.slug}`}>
                    <button
                      className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-dark font-semibold rounded-lg transition-colors duration-300"
                      aria-label={`Read more about ${uni.title || "this university"}`}
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p>No universities available</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default UniComponent1;
