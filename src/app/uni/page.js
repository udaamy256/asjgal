import React from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import UniComponent from "@/components/bloglayoutone/page";
import UniComponent1 from "@/components/bloglayoutone/unicomponent/page";



export default function Uni() {
  return (
    <>
      <Head>
        <title>Study Visa Consultant</title>
        <meta property="og:title" content="Study Visa Consultant" />
        <meta property="og:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        <meta property="og:image" content="https://your-site-url.com/social-banner.png" />
        <meta property="og:url" content="https://your-site-url.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Visa Consultant" />
        <meta name="twitter:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        <meta name="twitter:image" content="https://your-site-url.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
          <article className="col-span-2 xl:col-span-1 row-span-2 relative">
            <UniComponent />
          </article>
          <article className="col-span-2 sm:col-span-1 row-span-1 relative">
            <UniComponent1 />
          </article>
        </div>
      </div>
    </>
  );
}