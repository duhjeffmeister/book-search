const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-errors')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id }).select(
              '-__v -password',
            )
            return userData
          }
          throw new AuthenticationError('Not logged in')
        },
      },