const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    notes: [String]
}

type Clef {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Accidental {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type KeySignature {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Rhythm {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Rest {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Triplet {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type RhythmAddition {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type MajorMode {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type Pentatonic {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type OtherScale {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type PerfectInterval {
    _id: ID
    name: String!
    description: String!
    image: String!
    referenceSong: String!
}

type MajorInterval {
    _id: ID
    name: String!
    description: String!
    image: String!
    referenceSong: String!
}

type MinorInterval {
    _id: ID
    name: String!
    description: String!
    image: String!
    referenceSong: String!
}

type Triad {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type SusChord {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type SixthChord {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type SeventhChord {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User!
    clefs: [Clef!]
    accidentals: [Accidental!]
    keySignatures: [KeySignature!]
    rhythms: [Rhythm!]
    rests: [Rest!]
    triplets: [Triplet!]
    rhythmAdditions: [RhythmAddition!]
    perfectIntervals: [PerfectInterval!]
    majorIntervals: [MajorInterval!]
    minorIntervals: [MinorInterval!]
    majorModes: [MajorMode!]
    pentatonics: [Pentatonic!]
    otherScales: [OtherScale!]
    triads: [Triad!]
    susChords: [SusChord!]
    sixthChords: [SixthChord!]
    seventhChords: [SeventhChord!]
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