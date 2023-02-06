import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_ACCIDENTALS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const AccidentalList = () => {
    const { data } = useQuery(QUERY_ACCIDENTALS)

    console.log(data)

    const accidentals = data?.accidentals

    if (!accidentals) {
        return null
    }

    return (
        <div className='information'>
            {accidentals && accidentals.map((accidental) => (
                <RhythmSymbolCard image={accidental.image} name={accidental.name} description={accidental.description}/>
            ))}
        </div>
    )
}

export default AccidentalList
