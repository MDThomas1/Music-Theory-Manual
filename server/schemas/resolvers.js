const { AuthenticationError } = require('apollo-server-express');
const { 
    User,
    Chord,
    Interval,
    Rhythm,
    Scale,
    Symbol
} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            
            throw new AuthenticationError("It appears you aren't currently logged in!")
        },

        chords: async () => {
            return Chord.find();
        },

        intervals: async () => {
            return Interval.find()
        },

        rhythms: async () => {
            return Rhythm.find()
        },

        scales: async () => {
            return Scale.find()
        },

        symbols: async () => {
            return Symbol.find()
        }
    },

    Mutation: {
        signUp: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);

            return { token, user }
        },

        login: async (parent, { email, password }) => {
            const user = User.findOne({ email })

            if (!user) {
                throw new AuthenticationError("Email/password is incorrect, please try again!")
            }

            const passwordCheck = await profile.isCorrectPassword(password)

            if (!passwordCheck) {
                throw new AuthenticationError("Email/password is incorrect, please try again!")
            }

            const token = signToken(user)
            return { token, user }
        },

        createNote: async (parent, { note }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {
                        _id: context.user._id
                    },
                    {
                        $addToSet: { notes: note }
                    },
                    {
                        new: true,
                        runValidators: true
                    }
                )
            }

            throw new AuthenticationError("It appears you aren't currently logged in!")
        },
        
        deleteNote: async (parent, { note }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {
                        _id: context.user._id
                    },
                    {
                        $pull: { notes: note }
                    },
                    {
                        new: true
                    }
                )
            }

            throw new AuthenticationError("It appears you aren't currently logged in!")
        }
    }
}

module.exports = resolvers


