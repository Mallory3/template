import { CgFolderAdd } from 'react-icons/cg'

export default   {
  // This is the display name for the type
  title: "Service",
  
  // The identifier for this document type used in the api's
  name: "service",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  icon: CgFolderAdd,
  
  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "Service",

      // The identifier for this field used in the api's
      name: "title",

      // The type of this field
      type: "string",
    },
    {
      // The display name for this field
      title: "Price",

      // The identifier for this field used in the api's
      name: "price",

      // The type of this field
      type: "number",
    },
    {
      // The display name for this field
      title: "Description",

      // The identifier for this field used in the api's
      name: "description",

      // The type of this field
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