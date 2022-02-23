export default   {
  // This is the display name for the type
  title: "Contact",
  
  // The identifier for this document type used in the api's
  name: "contact",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Disable the add new and publish button
  // __experimental_actions: [],
  
  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "Map Embedded Src",

      // The identifier for this field used in the api's
      name: "mapEmbedded",

      // The type of this field
      type: "string",
    },
    {
      // The display name for this field
      title: "email",

      // The identifier for this field used in the api's
      name: "email",

      // The type of this field
      type: "string",
    },
  ]
}