const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Note {
    _id: ID
    body: String
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
}
`

module.exports = typeDefs