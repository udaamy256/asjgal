import sanityClient from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

if (!projectId) {
  throw new Error("Sanity projectId is missing. Please set the SANITY_PROJECT_ID environment variable.");
}
if (!dataset) {
  throw new Error("Sanity dataset is missing. Please set the SANITY_DATASET environment variable.");
}

export const client = sanityClient({
  projectId,
  dataset,
  useCdn: true, // Set to false for fresh data
});
