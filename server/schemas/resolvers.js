const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-errors')
const { signToken } = require('../utils/auth')

const resolvers = {