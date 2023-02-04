import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_RHYTHMS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const RhythmList = () => {
    const { data } = useQuery(QUERY_RHYTHMS)

    const rhythms = data?.rhythms

    return (
        <div className='information'>
            {rhythms.map((rhythm) => (
                <RhythmSymbolCard image={rhythm.image} name={rhythm.name} description={rhythm.description}/>
            ))}
        </div>
    )
}

export default RhythmList