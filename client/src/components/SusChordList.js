import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_SUS_CHORDS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const SusChordList = () => {
    const { data } = useQuery(QUERY_SUS_CHORDS)

    const susChords = data?.susChords

    return (
        <div className='information'>
            {susChords.map((susChord) => {
                <ChordScaleCard image={susChord.image} name={susChord.name} description={susChord.description} structure={susChord.structure} />
            })}
        </div>
    )
}

export default SusChordList