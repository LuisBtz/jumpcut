export default {
    name: 'settings',
    title: 'Jumpcut Settings',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
        },
        {
            name: 'mainLogo',
            title: 'Main Logo',
            type: 'imageObject',
        },
        {
            name: 'logoCollective',
            title: 'Logo Jumpcut Collective',
            type: 'imageObject'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
        },
        {
            name: 'social',
            type: 'array',
            of: [{type: 'social'}]
        },
    ]
}