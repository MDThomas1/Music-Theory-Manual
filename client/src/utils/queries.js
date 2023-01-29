import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
        _id 
        name
        notes
    }
}`

export const QUERY_CHORDS = gql`
query chords {
    chords {
        _id
        name
        structure
        description
        image
        subsection
    }
}`

export const QUERY_INTERVALS = gql`
query intervals {
    intervals {
        _id
        name
        description
        image
        referenceSongs
        subsection
    }
}`

export const QUERY_RHYTHMS = gql`
query rhythms {
    rhythms {
        _id
        name
        description
        image
        subsection
    }
}`

export const QUERY_SCALES = gql`
query scales {
    scales {
        _id
        name
        structure
        description
        image
        subsection
    }
}`

export const QUERY_SYMBOLS = gql`
query symbols {
    symbols {
        _id
        name
        description
        image
        subsection
    }
}`

