const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

const geoType = new GraphQLObjectType({
  name: 'Geo',
  fields: () => ({
    lat: GraphQLNonNull(GraphQLFloat),
    lng: GraphQLNonNull(GraphQLFloat),
  })
})

const adressType = new GraphQLObjectType({
  name: 'Adress',
  fields: () => ({
    street: {
      type: GraphQLNonNull(GraphQLString),
    },
    suite: {
      type: GraphQLNonNull(GraphQLString),
    },
    city: {
      type: GraphQLNonNull(GraphQLString),
    },
    zipcode: {
      type: GraphQLNonNull(GraphQLString),
    },
    geo: {
      type: GraphQLNonNull(geoType)
    }
  })
})

module.exports = {
  adressType,
}
