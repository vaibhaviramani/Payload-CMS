
import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: 'header',
  access:{
    read: () => true
  },
  fields: [
    {
      name:'Organization',
      type:'select',
      options:[
        'Goibibo',
        'MakeMyTrip',
      ]
    }
  ]
}

export default Header;