import React from 'react'

import IntervalCard from './Interval-Card'

import { QUERY_PERFECT_INTERVALS } from '../utils/queries';
import { useQuery } from '@apollo/client';

const PerfectIntervalList = () => {
    const { data } = useQuery(QUERY_PERFECT_INTERVALS)

    const perfectIntervals = data?.perfectIntervals

    return (
        <div className='information'>
            {perfectIntervals.map((perfectInterval) => {
                <IntervalCard image={perfectInterval.image} name={perfectInterval.name} description={perfectInterval.description} referenceSong={perfectInterval.referenceSong} />
            })}
        </div>
    )
}

export default PerfectIntervalList