export default {
    name: 'heroTeam',
    title: 'Hero Team',
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
            type: 'imageObject',
        },
        {
            name: 'imageTeams',
            title: 'Image Teams',
            type: 'imageObject',
        },
        {
            name: 'color',
            title: 'Hex Color',
            type: 'string',
        }
    ]
}