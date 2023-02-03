import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_OTHER_SCALES } from '../utils/queries';
import { useQuery } from '@apollo/client';

const OtherScaleList = () => {
    const { data } = useQuery(QUERY_OTHER_SCALES)

    const otherScales = data?.otherScales

    return (
        <div className='information'>
            {otherScales.map((otherScale) => {
                <ChordScaleCard image={otherScale.image} name={otherScale.name} description={otherScale.description} structure={otherScale.structure} />
            })}
        </div>
    )
}

export default OtherScaleList