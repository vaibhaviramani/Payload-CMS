import { Block } from 'payload/types';

const ContentCard: Block = {
  slug: 'contentCard',
  labels: {
    singular: 'Content Card',
    plural: 'Content Cards',
  },
  fields: [
    {
      name: 'headingText',
      label: 'Heading Text',
      type: 'text',
      required: true,
    },
    {
      type:'array',
      name:'contentCard',
      label:'Content Cards',
      admin:{
        initCollapsed:true,
        components: {
          RowLabel: ({ data }) => data?.title || "New Card",
        },
      },
      fields:[
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name:'title',
          label:'Title',
          type:'text',
          required:true,
        },
        {
          name:'description',
          label:'Description',
          type:'textarea',
          required:true,
        },
        {
          name:'showCTA',
          label:'Show CTA Button',
          type:'checkbox',
        },
        {
          name:'button',
          type: 'group',
          fields:[
            {
              name:'buttonText',
              label:'Button Text',
              type:'text',
              required:true,
            },
            {
              name:'buttonLink',
              label:'Button Link',
              type:'text',
              required:true,
            }
          ]
        }
      ]
    },
  ],
}

export default ContentCard;