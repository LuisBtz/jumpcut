export default {
    title: 'Image',
    name: 'imageObject',
    type: 'image',
    options: {
      hotspot: true // <-- Defaults to false
    },
    fields: [
    //   {
    //     name: 'caption',
    //     type: 'string',
    //     title: 'Caption',
    //     options: {
    //       isHighlighted: true // <-- make this field easily accessible
    //     }
    //   },
      {
        // Editing this field will be hidden behind an "Edit"-button
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
      }
    ]
  }