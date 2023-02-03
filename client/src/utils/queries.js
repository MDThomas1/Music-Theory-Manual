import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
        _id 
        name
        notes
    }
}`

export const QUERY_CLEFS = gql`
query clefs {
    clefs {
        _id
        name
        description
        image
    }
}`

export const QUERY_ACCIDENTALS = gql`
query accidentals {
    accidentals {
        _id
        name
        description
        image
    }
}`

export const QUERY_KEY_SIGNATURES = gql`
query keySignatures {
    keySignatures {
        _id
        name
        description
        image
    }
}`

export const QUERY_RHYTHMS = gql`
query rhythms {
    rhythms {
        _id
        name
        description
        image
    }
}`

export const QUERY_RESTS = gql`
query rests {
    rests {
        _id
        name
        description
        image
    }
}`

export const QUERY_TRIPLETS = gql`
query triplets {
    triplets {
        _id
        name
        description
        image
    }
}`

export const QUERY_RHYTHM_ADDITIONS = gql`
query rhythmAdditions {
    rhythmAdditions {
        _id
        name
        description
        image
    }
}`

export const QUERY_PERFECT_INTERVALS = gql`
query perfectIntervals {
    perfectIntervals {
        _id
        name
        description
        image
        referenceSong
    }
}`

export const QUERY_MAJOR_INTERVALS = gql`
query majorIntervals {
    majorIntervals {
        _id
        name
        description
        image
        referenceSong
    }
}`

export const QUERY_MINOR_INTERVALS = gql`
query minorIntervals {
    minorIntervals {
        _id
        name
        description
        image
        referenceSong
    }
}`

export const QUERY_MAJOR_MODES = gql`
query majorModes {
    majorModes {
        _id
        name
        structure
        description
        image
    }
}`

export const QUERY_PENTATONICS = gql`
query pentatonics {
    pentatonics {
        _id
        name
        structure
        description
        image
    }
}`

export const QUERY_OTHER_SCALES = gql`
query otherScales {
    otherScales {
        _id
        name
        structure
        description
        image
    }
}`

export const QUERY_TRIADS = gql`
query chords {
    chords {
        _id
        name
        structure
        description
        image
    }
}`

export const QUERY_SUS_CHORDS = gql`
query susChords {
    susChords {
        _id
        name
        structure
        description
        image
    }
}`

export const QUERY_SIXTH_CHORDS = gql`
query sixthChords {
    chords {
        _id
        name
        structure
        description
        image
    }
}`

export const QUERY_SEVENTH_CHORDS = gql`
query seventhChords {
    seventhChords {
        _id
        name
        structure
        description
        image
    }
}`