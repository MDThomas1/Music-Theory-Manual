import React from 'react';

import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import { CREATE_NOTE, DELETE_NOTE } from '../utils/mutations'

const Profile = () => {
    const { data } = useQuery(QUERY_ME)

    const [createNote, { error }] = useMutation(CREATE_NOTE)

    const profile = data

    return (
        <div>
            <h3>Welcome {profile.name}</h3>
            <div>
                <form>
                    <input />
                </form>
            </div>
        </div>
    )

}

export default Profile
