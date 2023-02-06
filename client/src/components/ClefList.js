import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_CLEFS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const ClefList = () => {
    const { data } = useQuery(QUERY_CLEFS)

    const clefs = data?.clefs

    if (!clefs) {
        return null
    }

    return (
        <div className='information'>
            {clefs && clefs.map((clef) => (
                <RhythmSymbolCard image={clef.image} name={clef.name} description={clef.description}/>
            ))}
            {clefs.map()}
        </div>
    )
}

export default ClefList