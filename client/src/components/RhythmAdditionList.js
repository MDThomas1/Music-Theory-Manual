import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_RHYTHM_ADDITIONS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const RhythmAdditionList = () => {
    const { data } = useQuery(QUERY_RHYTHM_ADDITIONS)

    const rhythmAdditions = data?.rhythmAdditions

    return (
        <div className='information'>
            {rhythmAdditions.map((rhythmAddition) => {
                <RhythmSymbolCard image={rhythmAddition.image} name={rhythmAddition.name} description={rhythmAddition.description}/>
            })}
        </div>
    )
}

export default RhythmAdditionList