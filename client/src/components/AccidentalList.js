import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_ACCIDENTALS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const AccidentalList = () => {
    const { data } = useQuery(QUERY_ACCIDENTALS)

    const accidentals = data?.accidentals

    return (
        <div className='information'>
            {accidentals.map((accidental) => {
                <RhythmSymbolCard image={accidental.image} name={accidental.name} description={accidental.description}/>
            })}
        </div>
    )
}

export default AccidentalList
