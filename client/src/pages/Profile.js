import React, { useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import { CREATE_NOTE, DELETE_NOTE } from '../utils/mutations'

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
                <form onSubmit={handleFormSubmit}>
                    <input placeholder='Create a new note!' value={note} onChange={(event) => setNote(event.target.value)} />
                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    )

}

export default Profile
