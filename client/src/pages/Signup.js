import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ name: '', email: '', password: '' })
    const [signup, { error, data }] = useMutation(SIGN_UP)

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
            const { data } = await signup({
                variables: { ...formState }
            })

            Auth.signup(data.signup.token)
        } catch (error) {
            console.error(error)
        }

        setFormState({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className='page'>
            <h2>Sign up</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input placeholder='Enter your username here' name='name' type='text' value={formState.name} onChange={handleChange} />
                    <input placeholder='Enter your email here' name='email' type='email' value={formState.email} onChange={handleChange} />
                    <input placeholder='Enter your password here' name='password' type='password' value={formState.password} onChange={handleChange} />
                    {data ? <Link to='/'>Sign in successful!</Link> : <button type='submit'>Submit</button>}
                </form>
            </div>
        </div>
    )
}

export default Signup



