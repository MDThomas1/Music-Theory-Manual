import { gql } from '@apollo/client';

export const SIGN_UP = gql`
mutation signUp {
    signUp(name: $name, email: $email, password: $password) {
        token
        profile(
            _id
            name
            notes
        )
    }
}
`

export const LOGIN_USER = gql`
mutation login {
    login(email: $email, password: $password) {
        token
        profile(
            _id
            name
            notes
        )
    }
}
`

export const CREATE_NOTE = gql`
mutation createNote {
    createNote(note: $note) {
        _id
        name
        notes
    }
}
`

export const DELETE_NOTE = gql`
mutation deleteNote {
    deleteNote(note: $note) {
        _id
        name
        notes
    }
}
`