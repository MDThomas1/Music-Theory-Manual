const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    notes: [String]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User!
}

type Mutation {
    signUp(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteAccount: Auth

    createNote(note: String!): User
    deleteNote(note: String!): User
}
`

module.exports = typeDefs