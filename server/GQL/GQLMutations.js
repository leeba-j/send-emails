const { GraphQLNonNull } = require('graphql')
const { UserModel } = require('./GQLModels')
const { createUser } = require('../DB/DBQueries')
const { UserDetailsInputObject} = require('./GQLInputObjects')

const createUserMutation = {
    type: UserModel,
    args: {
        userDetails: { type: new GraphQLNonNull(UserDetailsInputObject) }
    },
    resolve(parent, args) {
        return createUser(args.userDetails)
    }
}

module.exports = { createUserMutation}