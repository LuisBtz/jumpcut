export default {
    name: 'technologyComponent',
    title: 'Technology',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'bottomText',
            title: 'Bottom Text',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageObject'
        },
        {
            name: 'color',
            title: 'Hex Color',
            type: 'string',
        }
    ]
}