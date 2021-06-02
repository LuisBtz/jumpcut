export default {
    name: 'visionBox4',
    title: 'Vision Box 4',
    type: 'object',
    fields: [
        {
            name: 'topText',
            title: 'Top Text',
            type: 'string',
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [{type: 'imageObject'}],
            options: {
                layout: 'grid'
              },
        },
        {
            name: 'bottomText',
            title: 'Bottom Text',
            type: 'string',
        }
    ]
}