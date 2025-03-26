import { Block } from 'payload/types';

const HeroBanner: Block = {
  labels: {
    singular: 'Hero Banner',
    plural: 'Hero Banners',
  },
  slug: 'hero-banner',
  fields: [
    {
      name: 'title',
      label: 'Hero Title',
      type: 'text',
    },
    {
      name: 'subtitle',
      label: 'Hero Subtitle',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      label: 'Hero Background Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default HeroBanner;