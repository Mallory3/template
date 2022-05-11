import React from 'react'
import { CgFolderAdd } from 'react-icons/cg'
import { FiAlertCircle } from 'react-icons/fi'
import { IoMdBody } from 'react-icons/io'


export default   {
  // This is the display name for the type
  title: "Header",
  
  // The identifier for this document type used in the api's
  name: "header",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  icon: CgFolderAdd,
  
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
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
          providers: ["f7", "fa", "mdi", "sa", "hi", "fi"]
      }
    },
    {
      name: 'gridNote2',
      type: 'note',
      options: {
        icon: FiAlertCircle,
        headline: 'Hold up!',
        message: <>A custom HTML message: <a href="#0" target="_blank">click here</a></>,
        tone: 'caution'
      }
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
    {
      name: "body",
      title: "Body",
      type: 'richText'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    }
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}