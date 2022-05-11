import { CgFolderAdd } from 'react-icons/cg'

export default   {
  title: "Gallery",
  name: "gallery",
  type: "document",
  icon: CgFolderAdd,
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        metadata: ['location', 'palette']
      }
    },
    {
      title: "Alt",
      name: "alt",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}