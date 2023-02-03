import React from 'react'

import IntervalCard from './Interval-Card'

import { QUERY_MAJOR_INTERVALS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const MajorIntervalList = () => {
    const { data } = useQuery(QUERY_MAJOR_INTERVALS)

    const majorIntervals = data?.majorIntervals

    return (
        <div className='information'>
            {majorIntervals.map((majorInterval) => {
                <IntervalCard image={majorInterval.image} name={majorInterval.name} description={majorInterval.description} referenceSong={majorInterval.referenceSong} />
            })}
        </div>
    )
}

export default MajorIntervalList