import { Block } from "payload/types";
import { lexicalEditor, BlocksFeature, LinkFeature, UploadFeature } from '@payloadcms/richtext-lexical';

const RichText: Block = {
  slug: "rich-text",
  labels: {
    singular: "Rich Text",
    plural: "Rich Texts",
  },
  fields: [
    {
      name:'title',
      label:'Title',
      type:'text',
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features:({defaultFeatures}) => [
          ...defaultFeatures,
          LinkFeature({
            fields: ({ defaultFields }) => [
              ...defaultFields,
              {
                name: 'rel',
                label: 'Rel Attribute',
                type: 'select',
                hasMany: true,
                options: ['noopener', 'noreferrer', 'nofollow'],
                admin: {
                  description:
                    'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                },
              },
            ],
          }),
          UploadFeature({
            collections: {
              uploads: {
                fields: [
                  {
                    name: 'caption',
                    type: 'richText',
                    editor: lexicalEditor(),
                  },
                ],
              },
            },
          }),
        ]
      }),
    },
  ],
}

export default RichText;