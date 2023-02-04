import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_TRIPLETS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const TripletList = () => {
    const { data } = useQuery(QUERY_TRIPLETS)

    const triplets = data?.triplets

    return (
        <div className='information'>
            {triplets.map((triplet) => (
                <RhythmSymbolCard image={triplet.image} name={triplet.name} description={triplet.description}/>
            ))}
        </div>
    )
}

export default TripletList