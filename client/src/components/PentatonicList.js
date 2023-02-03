import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_PENTATONICS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const PentatonicList = () => {
    const { data } = useQuery(QUERY_PENTATONICS)

    const pentatonics = data?.pentatonics

    return (
        <div className='information'>
            {pentatonics.map((pentatonic) => {
                <ChordScaleCard image={pentatonic.image} name={pentatonic.name} description={pentatonic.description} structure={pentatonic.structure} />
            })}
        </div>
    )
}

export default PentatonicList
