const { 
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require('graphql');
const {  adressType } = require('../adress');

const companyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    catchPhrase: {
      type: GraphQLNonNull(GraphQLString),
    },
    bs: {
      type: GraphQLNonNull(GraphQLString),
    },
  })
})

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLNonNull(adressType),
    },
    phone: {
      type: GraphQLNonNull(GraphQLString),
    },
    website: {
      type: GraphQLNonNull(GraphQLString),
    },
    company: {
      type: GraphQLNonNull(companyType),
    },
  })
})

module.exports = {
  userType,
}
