import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_SIXTH_CHORDS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const SixthChordList = () => {
    const { data } = useQuery(QUERY_SIXTH_CHORDS)

    const sixthChords = data?.sixthChords

    return (
        <div className='information'>
            {sixthChords.map((sixthChord) => {
                <ChordScaleCard image={sixthChord.image} name={sixthChord.name} description={sixthChord.description} structure={sixthChord.structure} />
            })}
        </div>
    )
}

export default SixthChordList