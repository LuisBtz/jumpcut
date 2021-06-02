export default {
    name: 'member',
    title: 'Member',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'imageObject',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }
    ]
}