import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_CLEFS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const ClefList = () => {
    const { data } = useQuery(QUERY_CLEFS)

    const clefs = data?.clefs

    return (
        <div className='information'>
            {clefs.map((clef) => (
                <RhythmSymbolCard image={clef.image} name={clef.name} description={clef.description}/>
            ))}
        </div>
    )
}

export default ClefList