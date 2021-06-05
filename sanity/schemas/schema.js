// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Objects
import imageObject from './objects/imageObject'
import heroVision from './vision/heroVision'
import visionBox1 from './vision/visionBox1'
import blockContent from './objects/blockContent'
import visionBox2 from './vision/visionBox2'
import visionBox3 from './vision/visionBox3'
import visionBox4 from './vision/visionBox4'
import wwaHero from './wwa/wwaHero'
import wwaBox1 from './wwa/wwaBox1'
import wwaBox2 from './wwa/wwaBox2'
import heroTeam from './team/heroTeam'
import teamMember from './team/teamMember'
import whoWeWorkWith from './team/whoWeWorkWith'
import technologyComponent from './technology/technologyComponent'
import seo from './seo/seo'
import heroCollective from './collective/heroCollective'
import heroCollective2 from './collective/heroCollective2'
import member from './collective/member'
import social from './settings/social'
import blockContentObject from './objects/blockContentObject'


// Pages
import home from './home'
import collective from './collective'
import settings from './settings'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
    imageObject,
    heroVision,
    visionBox1,
    blockContent,
    visionBox2,
    visionBox3,
    visionBox4,
    wwaHero,
    wwaBox1,
    wwaBox2,
    heroTeam,
    teamMember,
    whoWeWorkWith,
    technologyComponent,
    seo,
    heroCollective,
    heroCollective2,
    member,
    social,
    blockContentObject,
    // pages
    home,
    collective,
    settings,
  ]),
})
