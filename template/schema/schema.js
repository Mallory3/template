// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import header from './header'
import parallaxBanner from './parallaxBanner'
import contact from './contact'
import service from './service'
import promoBanner from './promoBanner'
import richText from './richText'
import figure from './figure'
import gallery from './gallery'
import team from './team'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    parallaxBanner,
    contact,
    header,
    service,
    promoBanner,
    richText,
    figure,
    gallery,
    team,
  ]),
})
