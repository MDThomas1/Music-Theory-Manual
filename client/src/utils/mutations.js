import { gql } from '@apollo/client';

export const SIGN_UP = gql`
mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
        token
        profile(
            _id
            name
            notes
        )
    }
}`

export const LOGIN_USER = gql`
mutation login($name: String!, $email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        profile(
            _id
            name
            notes
        )
    }
}`

export const CREATE_NOTE = gql`
mutation createNote($note: String!) {
    createNote(note: $note) {
        _id
        name
        notes
    }
}`

export const DELETE_NOTE = gql`
mutation deleteNote($note: String!) {
    deleteNote(note: $note) {
        _id
        name
        notes
    }
}`