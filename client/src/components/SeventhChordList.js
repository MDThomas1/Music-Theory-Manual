import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_SEVENTH_CHORDS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const SeventhChordList = () => {
    const { data } = useQuery(QUERY_SEVENTH_CHORDS)

    const seventhChords = data?.seventhChords

    return (
        <div className='information'>
            {seventhChords.map((seventhChord) => (
                <ChordScaleCard image={seventhChord.image} name={seventhChord.name} description={seventhChord.description} structure={seventhChord.structure} />
            ))}
        </div>
    )
}

export default SeventhChordList