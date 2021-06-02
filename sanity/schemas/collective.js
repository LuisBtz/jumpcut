export default {
    name: 'collective',
    title: 'Jumpcut Collective',
    type: 'document',
    icon: () => `🏫`,
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
            hidden: true,
        },
        {
            name: 'heroCollective',
            type: 'heroCollective'
        },
        {
            name: 'heroCollective2',
            type: 'heroCollective2'
        },
        {
            name: 'membersTitle',
            title: 'Members Title',
            type: 'string'
        },
        {
            name: 'littleText',
            title: 'Little Text',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageObject',
        },
        {
            name: 'member',
            type: 'array',
            of: [{type: 'member'}]
        },
        {
            name: 'seo',
            type: 'seo',
        },
    ]
}