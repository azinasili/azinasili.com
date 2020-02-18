import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'uwj1grtp',
  dataset: 'production',
  useCdn: true,
});
