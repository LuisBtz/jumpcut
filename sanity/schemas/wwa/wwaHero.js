export default {
    name: 'wwaHero',
    title: 'Who We Are Hero',
    type: 'object',
    fields: [
        {
            name: 'topText',
            title: 'Top Text',
            type: 'string'
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