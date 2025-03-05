/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },

    eslint: {
      // List the rules you want to disable in an array
      ignoreDuringBuilds: ['react-hooks/exhaustive-deps', 'no-unused-vars'],
    },
  };
  
  export default nextConfig;