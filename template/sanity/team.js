import { CgFolderAdd } from 'react-icons/cg'

export default   {
  title: "Team",
  name: "team",
  type: "document",
  icon: CgFolderAdd,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Bio",
      name: "bio",
      type: "string",
    },
    {
      title: "Social",
      name: "social",
      type: "string",
    },
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