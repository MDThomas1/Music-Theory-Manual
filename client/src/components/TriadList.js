import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_TRIADS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const TriadList = () => {
    const { data } = useQuery(QUERY_TRIADS)

    const triads = data?.triads

    return (
        <div className='information'>
            {triads.map((triad) => (
                <ChordScaleCard image={triad.image} name={triad.name} description={triad.description} structure={triad.structure} />
            ))}
        </div>
    )
}

export default TriadList