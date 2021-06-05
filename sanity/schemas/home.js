export default {
    //
    name: 'home',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
        },
        {
            name: 'heroVision',
            type: 'heroVision',
        },
        {
            name: 'visionBox1',
            type: 'visionBox1'
        },
        {
            name: 'visionBox2',
            type: 'visionBox2',
        },
        {
            name: 'visionBox3',
            type: 'visionBox3',
        },
        {
            name: 'visionBox4',
            type: 'visionBox4',
        },
        {
            name: 'wwaHero',
            title: 'Who We Are Hero',
            type: 'wwaHero',
        },
        {
            name: 'wwaBox1',
            title: 'Who We Are Box 1',
            type: 'wwaBox1',
        },
        {
            name: 'wwaBox2',
            title: 'Who We Are Box 2',
            type: 'wwaBox2',
        },
        {
            name: 'heroTeam',
            title: 'Hero Team',
            type: 'heroTeam'
        },
        {
            name: 'teamMember',
            type: 'array',
            of: [{type: 'teamMember'}]
        },
        {
            name: 'whoWeWorkWith',
            type: 'whoWeWorkWith',
        },
        {
            name: 'technology',
            type: 'technologyComponent',
        },
        {
            name: 'text',
            title: 'Repeatable Text',
            type: 'array',
            of: [{type: 'blockContentObject'}]
        },
        {
            name: 'seo',
            type: 'seo',
        }
    ],
  }