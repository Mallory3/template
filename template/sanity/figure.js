export default {
  name: 'figure',
  type: 'object',
  title: 'figure',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string'
    },
    {
      name: 'caption',
      title: 'caption',
      type: 'string'
    }
  ]
}