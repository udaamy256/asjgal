import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // Load from environment variable
  dataset: 'production',                   // Replace with your dataset name
  apiVersion: '2023-10-01',               // Specify an API version (e.g., today's date)
  useCdn: true                            // Set to false if you need real-time data
});
