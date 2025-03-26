import { Block } from "payload/types";

const ItineraryImage: Block = {
  slug:'itinerary-image',
  fields:[
    {
      name:'image',
      label:'Itinerary Image',
      type:'upload',
      relationTo:'media',
    }
  ]

}

export default ItineraryImage;