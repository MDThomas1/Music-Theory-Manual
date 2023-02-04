import React from 'react'

import IntervalCard from './Interval-Card'

import { QUERY_MINOR_INTERVALS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const MinorIntervalList = () => {
    const { data } = useQuery(QUERY_MINOR_INTERVALS)

    const minorIntervals = data?.minorIntervals

    return (
        <div className='information'>
            {minorIntervals.map((minorInterval) => (
                <IntervalCard image={minorInterval.image} name={minorInterval.name} description={minorInterval.description} referenceSong={minorInterval.referenceSong} />
            ))}
        </div>
    )
}

export default MinorIntervalList