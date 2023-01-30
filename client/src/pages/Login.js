import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth'

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error, data }] = useMutation(LOGIN_USER)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const { data } = await login({
                variables: { ...formState }
            })

            Auth.login(data.login.token)
        } catch (error) {
            console.error(error)
        }

        setFormState({
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <h3>Login here to get started!</h3>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input placeholder='Enter your email here' name='email' type={email} value={formState.email} onChange={handleChange} />
                    <input placeholder='Enter your password here' name='password' type={password} value={formState.password} onChange={handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login