const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Note {
    _id: ID
    body: String
    createdAt: Date
}

type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    notes: [Note]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: Profile
}

type Mutation {
    signUp(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createNote(note: Note!): User
    deleteNote(note: Note!): User
}
`

module.exports = typeDefs