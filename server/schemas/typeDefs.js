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

type Chord {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
    subsection: String!
}

type Interval: {
    _id: ID
    name: String!
    description: String!
    image: String!
    referenceSongs: String!
    subsection: String!
}

type Rhythm: {
    _id: ID
    name: String!
    description: String!
    image: String!
    subsection: String!
}

type Scale: {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
    subsection: String!
}

type Symbol: {
    _id: ID
    name: String!
    description: String!
    image: String!
    subsection: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: Profile
    chords: [Chord]!
    intervals: [Interval]!
    rhythms: [Rhythm]!
    scales: [Scale]!
    symbols: [Symbol]!
}

type Mutation {
    signUp(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createNote(note: Note!): User
    deleteNote(note: Note!): User
}
`

module.exports = typeDefs