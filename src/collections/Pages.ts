import { CollectionConfig } from 'payload/types';
import HeroBanner from '../blocks/HeroBanner';
import RichText from '../blocks/RichText';
import FAQ from '../blocks/Faq';
import PackageCards from '../blocks/PackageCard';
import ItineraryImage from '../blocks/ItineraryImage';
import AutoSuggestField from '../customfields/AutoSuggest';
import ContentCard from '../blocks/Card';


const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type:'row',
      fields:[
        {
          name: 'name',
          label: 'Page Name',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter a clear and concise name for this page.',
            width:'50%'
          },
        },
        {
          name: 'slug',
          label: 'URL Slug',
          type: 'text',
          required: true,
          admin: {
            description: 'This will be the page URL (e.g. /your-page-name).',
            width:'50%'
          },
        },
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'source',
          label: 'From',
          type: 'json',
          admin: {
            components: {
              Field: AutoSuggestField,
            },
            width:'50%'
          },
        },
        {
          name: 'destination',
          label: 'To',
          type: 'json',
          admin: {
            components: {
              Field: AutoSuggestField,
            },
            width:'50%'
          },
        },
      ],
    },
    {
      name:'h1Title',
      label:'H1 Title',
      type:'text',
      required: true,
      admin:{
        description:'The most important heading on a page, usually the page title',
        width:'50%',
      },
    },
    {
      name: 'content',
      label: 'Page Sections',
      type: 'blocks',
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      blocks: [
        HeroBanner,
        PackageCards,
        RichText,
        FAQ,
        ItineraryImage,
        ContentCard,
      ],
      admin: {
        description: 'Add sections to build the page content dynamically.',
      },
    },
  ],
};

export default Pages;