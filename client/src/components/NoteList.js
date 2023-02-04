import React from 'react';
import { useMutation } from '@apollo/client';

import { DELETE_NOTE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const NoteList = () => {
    const { data } = useQuery(QUERY_ME)

    const profile = data?.me

    const [deleteNote, {error}] = useMutation(DELETE_NOTE)

    const handleDeleteNote = async (note) => {
        try {
            const { data } = await deleteNote({
                variables: {note}
            })
        } catch (error) {
            console.error(error)
        }
    }

    if (!profile.notes.length) {
        return (
            <div>
                <p>It looks like you don't currently have any notes saved. Use the form above to create some.</p>
            </div>
        )
    }

    return (
        <div className='notelist'>
            {profile.notes.map((note) => {
                <div className='note'>
                    <p>{note.body}</p>
                    <p>Created on {note.createdAt}</p>
                    <button onClick={() => {handleDeleteNote}}></button>
                </div>
            })}
        </div>
    )


}

export default NoteList