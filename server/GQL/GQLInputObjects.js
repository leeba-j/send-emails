const { GraphQLInputObjectType, GraphQLString, GraphQLFloat } = require("graphql");

const UserDetailsInputObject = new GraphQLInputObjectType({
    name: 'UserDetailsInputObject',
    fields: () => ({
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        height: {
            type: GraphQLFloat
        }
    })
});

module.exports = { UserDetailsInputObject }