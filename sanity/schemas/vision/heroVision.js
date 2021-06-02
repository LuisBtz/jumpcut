export default {
    name: 'heroVision',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'background',
            title: 'Background',
            type: 'imageObject'
        },
        {
            name: 'icon',
            type: 'imageObject'
        }
    ]
}