import { Field } from "payload/types";

const SeoMetaField: Field = {
  name: 'seoMeta',
  type: 'group',
  label: 'SEO Metadata',
  admin: {
    description: 'Manage SEO-related metadata for this page.',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'SEO Metadata',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          required: true,
          admin: {
            description: 'The title that appears on search engine results (SERPs) and browser tabs (Max: 60 characters).',
            placeholder: 'Enter the meta title here...',
          },
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'A short summary that appears below the meta title in search results (Max: 160 characters).',
            placeholder: 'Enter the meta description here...',
          },
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
          admin: {
            description: 'A list of comma-separated keywords related to the page’s topic.',
            placeholder: 'e.g., travel, vacation, flights',
          },
        },
        {
          name: 'canonicalUrl',
          label: 'Canonical URL',
          type: 'text',
          admin: {
            description: 'Specifies the preferred URL when there are duplicate or similar pages.',
            placeholder: 'https://example.com/your-page',
          },
        },
        {
          name: 'breadcrumbs',
          label: 'Breadcrumbs',
          type: 'array',
          labels: {
            singular: 'Breadcrumb',
            plural: 'Breadcrumbs',
          },
          admin: {
            description: 'Define navigation breadcrumbs for better UX & SEO.',
            position:'sidebar'
          },
          fields: [
            {
              name: 'label',
              label: 'Breadcrumb Label',
              type: 'text',
              admin: {
                placeholder: 'e.g., Home, About Us',
              },
            },
            {
              name: 'link',
              label: 'Breadcrumb Link',
              type: 'text',
              admin: {
                placeholder: 'e.g., /home, /about-us',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default SeoMetaField;