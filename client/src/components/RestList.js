import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_RESTS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const RestList = () => {
    const { data } = useQuery(QUERY_RESTS)

    const rests = data?.rests

    return (
        <div className='information'>
            {rests.map((rest) => (
                <RhythmSymbolCard image={rest.image} name={rest.name} description={rest.description}/>
            ))}
        </div>
    )
}

export default RestList
