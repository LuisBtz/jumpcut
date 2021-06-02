export default {
    name: 'visionBox3',
    title: 'Vision Box 3',
    type: 'object',
    fields: [
        {
            name: 'topText',
            title: 'Top Text',
            type: 'blockContent',
        },
        {
            name: 'bottomText',
            title: 'Bottom Text',
            type: 'string',
        },
        {
            name: 'jumcutCollectiveImage',
            title: 'Jumpcut Collective Image',
            type: 'imageObject',
        },
        {
            name: 'jumpcutCollectiveLink',
            title: 'Jumpcut Collective Link',
            type: 'url'
        }
    ]
}