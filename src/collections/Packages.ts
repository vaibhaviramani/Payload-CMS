import { CollectionConfig } from "payload/types";

const Packages: CollectionConfig = {
  slug: "packages",
  admin: {
    useAsTitle: "packageName",
  },
  fields: [
    {
      type:'row',
      fields:[
        {
          name:'packageName',
          label:'Package Name',
          type:'text',
          required:true,
        },
        {
          name:'packageSlug',
          label:'Package Slug',
          type:'text',
          required:true,
        }
      ]
    },
    {
      name: "packagesList",
      label: "Available Packages",
      type: "array",
      labels: {
        singular: "Package",
        plural: "Packages",
      },
      admin:{
        initCollapsed:true,
        components: {
          RowLabel: ({ data }) => data?.name || "New Package",
        },
      },
      fields: [
        {
          type: "collapsible",
          label: "Package Details",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Enter the package name",
                  },
                },
                {
                  name: "slug",
                  label: "Slug",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Enter unique slug",
                    description: "This should be a unique identifier for the package.",
                  },
                },
              ],
            },
            {
              name: "packageImage",
              label: "Package Image",
              type: "upload",
              relationTo: "media",
              required: true,
              admin: {
                position: "sidebar",
              },
            },
          ],
        },

        {
          type: "collapsible",
          label: "Route Information",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "source",
                  label: "Source",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Enter source city",
                  },
                },
                {
                  name: "destination",
                  label: "Destination",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Enter destination city",
                  },
                },
              ],
            },
            {
              name: "stops",
              label: "Stopovers",
              type: "array",
              labels: {
                singular: "Stop",
                plural: "Stops",
              },
              fields: [
                {
                  name: "stopName",
                  label: "Stop Name",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Enter stop name",
                  },
                },
              ],
            },
          ],
        },

        {
          type: "collapsible",
          label: "Cab & Pricing",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "cabType",
                  label: "Cab Type",
                  type: "select",
                  required: true,
                  options: [
                    { label: "Hatchback", value: "hatchback" },
                    { label: "Sedan", value: "sedan" },
                    { label: "SUV", value: "suv" },
                  ]
                },
                {
                  name: "packageDuration",
                  label: "Duration",
                  type: "text",
                  required: true,
                  admin: {
                    placeholder: "Enter package duration (e.g., 2 Days, 3 Nights)",
                  },
                },
              ],
            },
            {
              name: "packagePrice",
              label: "Price (INR)",
              type: "number",
              required: true,
              admin: {
                position: "sidebar",
                placeholder: "Enter package price",
                description: "Price in Indian Rupees (INR).",
              },
            },
          ],
        },

        {
          type: "collapsible",
          label: "CTA Button",
          fields: [
            {
              name: "buttonText",
              label: "Button Text",
              type: "text",
              required: true,
              admin: {
                placeholder: "Enter button text (e.g., Book Now)",
              },
            },
            {
              name: "buttonLink",
              label: "Button Link",
              type: "text",
              required: true,
              admin: {
                placeholder: "Enter URL",
                description: "Paste the booking or inquiry link here.",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Packages;
