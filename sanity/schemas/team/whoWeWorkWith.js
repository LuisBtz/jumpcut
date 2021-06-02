export default {
    name: 'whoWeWorkWith',
    title: 'Who We Work With',
    type: 'object',
    fields: [
        {
            name: 'topText',
            title: 'Top Text',
            type: 'string',
        },
        {
            name: 'partners',
            title: 'Partners',
            type: 'blockContent',
        },
        {
            name: 'bottomText',
            title: 'Bottom Text',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Hex Color',
            type: 'string',
        }
    ]
}