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

type Clef: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Accidental: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type KeySignature: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Rhythm: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Rest: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type Triplet: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type RhythmAddition: {
    _id: ID
    name: String!
    description: String!
    image: String!
}

type MajorMode: {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type Pentatonic: {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type OtherScale: {
    _id: ID
    name: String!
    structure: String!
    description: String!
    image: String!
}

type Perfect Interval: {
    _id: ID
    name: String!
    description: String!
    image: String!
    referenceSong: String!
}

type Major Interval: {
    _id: ID
    name: String!
    description: String!
    image: String!
    referenceSong: String!
}

type Minor Interval: {
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
    me: Profile!
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

    createNote(note: Note!): User
    deleteNote(note: Note!): User
}
`

module.exports = typeDefs