import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import { QUERY_MAJOR_MODES } from '../utils/queries';
import { useQuery } from '@apollo/client';

const MajorModeList = () => {
    const { data } = useQuery(QUERY_MAJOR_MODES)

    const majorModes = data?.majorModes

    return (
        <div className='information'>
            {majorModes.map((majorMode) => {
                <ChordScaleCard image={majorMode.image} name={majorMode.name} description={majorMode.description} structure={majorMode.structure} />
            })}
        </div>
    )
}

export default MajorModeList