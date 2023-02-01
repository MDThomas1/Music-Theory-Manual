import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import { CREATE_NOTE } from '../utils/mutations'

import NoteList from '../components/NoteList'

import Auth from '../utils/auth'

const Profile = () => {
    const { data } = useQuery(QUERY_ME)

    const profile = data

    const [note, setNote] = useState('')

    const [createNote, { error }] = useMutation(CREATE_NOTE)
 
    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try {
            const data = await createNote({
                variables: { note }
            })

            setNote('')

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h3>Welcome {profile.name}</h3>
            <div>
                <h4>Create a new note</h4>
                <form onSubmit={handleFormSubmit}>
                    <input placeholder='Enter new note here' value={note} onChange={(event) => setNote(event.target.value)} />
                    <button type='submit'>Create</button>
                </form>
            </div>
            <div>
                <h4>Your Notes List</h4>
                {!profile.notes.length ? 
                <p>
                    You don't currently have any notes. Use the form above to create some.
                </p>
                : 
                <div>
                    <NoteList />
                </div> }
            </div>
            <div>
                <button type='click' onClick={Auth.logout()}>
                    Logout
                </button>
            </div>
        </div>
    )

}

export default Profile
