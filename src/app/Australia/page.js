import React from 'react';
import Head from 'next/head';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import UniComponent1 from '@/components/Australia/page';

const Page = async () => {
  // Fetch the first course's image from Sanity
  const query = `*[_type == "australia"][0]{image}`;
  const course = await client.fetch(query).catch(() => null);
  
  // Set a fallback image if fetch fails or no image exists
  const ogImageUrl = course?.image 
    ? urlFor(course.image).url() 
    : 'https://www.galaxyeducation.org/default-og-image.jpg';

  return (
    <div>
      {/* Metadata for SEO and Social Sharing */}
      <Head>
        <title>Expert Study Visa Consulting Services | Galaxy Education</title>
        <meta
          name="description"
          content="Galaxy Education offers professional study visa consulting to help students secure admissions to top universities worldwide. Explore our services and success stories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Study Visa Consulting Services | Galaxy Education" />
        <meta
          property="og:description"
          content="Galaxy Education offers professional study visa consulting to help students secure admissions to top universities worldwide. Explore our services and success stories."
        />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        {ogImageUrl && <meta property="og:image:width" content="1200" />}
        {ogImageUrl && <meta property="og:image:height" content="630" />}
        <meta property="fb:app_id" content="your-app-id-here" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta name="twitter:title" content="Expert Study Visa Consulting Services | Galaxy Education" />
        <meta
          name="twitter:description"
          content="Galaxy Education offers professional study visa consulting to help students secure admissions to top universities worldwide. Explore our services and success stories."
        />
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
      </Head>

      {/* Main content area with styling */}
      <main className="container mx-auto px-4 py-8" style={{ minHeight: '300px' }}>
        <UniComponent1 />
      </main>
    </div>
  );
};

export default Page;
