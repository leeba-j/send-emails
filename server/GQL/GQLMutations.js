const { GraphQLNonNull } = require('graphql')
const { UserModel } = require('./GQLModels')
const { UserDetailsInputObject } = require('./GQLInputObjects')
const { createdUserAndSendEmail } = require('../services/emailService');

const createUserMutation = {
    type: new GraphQLNonNull(UserModel),
    args: {
        userDetails: { type: new GraphQLNonNull(UserDetailsInputObject) }
    },
    resolve(parent, args) {
        return createdUserAndSendEmail(args.userDetails)
    }
}

module.exports = { createUserMutation }