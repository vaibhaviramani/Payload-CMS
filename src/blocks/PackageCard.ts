import { Block } from 'payload/types';

const PackageCards: Block = {
  slug: 'packagecards',
  labels: {
    singular: 'Package Card',
    plural: 'Package Cards',
  },
  fields: [
    {
      name:'packages',
      label:'Select Package',
      type:'relationship',
      relationTo:'packages',
      required: true,
      admin: {
        description: "Select one or more packages to display on this page.",
      },
    }
  ],
};

export default PackageCards;