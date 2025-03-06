import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g9webycc',  // Replace this with your actual projectId
  dataset: 'production',         // Replace with your dataset, typically 'production'
  apiVersion: '2023-03-01',      // Specify an API version (recommended)
  useCdn: true,                  // Use CDN for faster responses (set to false if you need the latest data)
});
