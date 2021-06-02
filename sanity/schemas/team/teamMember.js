export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'photo',
            title: 'Photo',
            type: 'imageObject'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }
    ]
}