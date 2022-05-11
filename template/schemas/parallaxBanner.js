import { CgWebsite } from 'react-icons/cg'

export default   {
  title: "Parallax Banner",
  name: "parallaxBanner",
  type: "document",
  icon: CgWebsite,
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
      title: "Header",
      name: "header",
      type: "string",
    },
    {
      title: "Subheader",
      name: "subheader",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "string",
    },
  ],
}