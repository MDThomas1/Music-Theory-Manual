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