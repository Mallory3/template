export default   {
  // This is the display name for the type
  title: "Header",
  
  // The identifier for this document type used in the api's
  name: "header",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      // The display name for this field
      title: "text (header title)",

      // The identifier for this field used in the api's
      name: "text",

      // The type of this field
      type: "string",
    },
    {
      // The display name for this field
      title: "size (1-6)",

      // The identifier for this field used in the api's
      name: "size",

      // The type of this field
      type: "number",
    }
  ]
}