export default {
    name: 'heroCollective',
    title: 'Hero Collective',
    type: 'object',
    fields: [
        {
            name: 'topText',
            title: 'Top Text',
            type: 'string'
        },
        {
            name: 'bottomText',
            title: 'bottomText',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageObject',
        },
        {
            name: 'color',
            title: 'Hex Color',
            type: 'string',
        },
    ]
}