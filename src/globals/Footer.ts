import { GlobalConfig } from "payload/types";

const Footer: GlobalConfig = {
  slug: 'footer',
  access:{
    read: () => true
  },
  fields: [
    {
      name: 'Organization',
      type: 'select',
      options: [
        'Goibibo',
        'MakeMyTrip',
      ]
    },
  ]
}

export default Footer;