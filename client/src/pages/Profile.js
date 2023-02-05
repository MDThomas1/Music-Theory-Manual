import React, { useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import { CREATE_NOTE, DELETE_NOTE } from '../utils/mutations'

import Auth from '../utils/auth'

const Profile = () => {
    const { data } = useQuery(QUERY_ME)

    const profile = data?.me

    const [note, setNote] = useState('')

    const [createNote, { createError }] = useMutation(CREATE_NOTE)
 
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

    const [ deleteNote, { deleteError } ] = useMutation(DELETE_NOTE)

    const handleNoteDeletion = async () => {
        try {const { data } = await deleteNote({
            variables: {note}
        })} catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='page'>
            <h2>Welcome {profile.name}</h2>
            <div>
                <h3>Create a new note</h3>
                <form onSubmit={handleFormSubmit}>
                    <input placeholder='Enter new note here' value={note} onChange={(event) => setNote(event.target.value)} />
                    <button type='submit'>Create</button>
                </form>
            </div>
            <div>
                <h3>Your Notes List</h3>
                {!profile.notes.length ? 
                <p>
                    You don't currently have any notes. Use the form above to create some.
                </p>
                : 
                <div className='notelist'>
                    {profile.notes.map((note) => (
                        <div className='note'>
                            <p>{note}</p>
                            <button type='button' onClick={handleNoteDeletion(note)}></button>
                        </div>
                    ))}
                </div> }
            </div>
            <div>
                <button type='button' onClick={Auth.logout()}>
                    Logout
                </button>
            </div>
        </div>
    )

}

export default Profile
