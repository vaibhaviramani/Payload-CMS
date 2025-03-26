import { Block } from 'payload/types';

const FAQ: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'faqs',
      label: 'FAQs',
      type: 'json',
      access:{
        read: () => true,
      },
      defaultValue: async () => {
        const response = await fetch('http://localhost:4000/api/faqs');
        const faqsData = await response.json();
        return faqsData;
      }
    },
  ],
};

export default FAQ;