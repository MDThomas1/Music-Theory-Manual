import React from 'react'

import IntervalCard from './Interval-Card'

import Unison from '../images/Intervals/Unison.png'
import Octave from '../images/Intervals/Octave.png'
import Fifth from '../images/Intervals/5th.png'
import Fourth from '../images/Intervals/4th.png'

const PerfectIntervalList = () => {
    const perfectIntervals = [
        {
            name: "Perfect Unison",
            description: "The perfect unison is an interval created by playing two notes of the same pitch, creating a ratio of 1:1. Because they are the same frequency, this is the most stable interval in western music.",
            image: Unison,
            referenceSong: "Imperial March by John Williams"
        },
        {
            name: "Perfect Octave",
            description: "The perfect octave is an interval created by playing two notes that are twelve semitones apart, creating a ratio of 2:1. Because the distance of twelve semitones means that the two notes have the same note name, this is the second most stable interval after the octave.",
            image: Octave,
            referenceSong: "Somewhere Over the Rainbow"
        },
        {
            name: "Perfect 5th",
            description: "The perfect fifth is an interval created by playing two notes that are seven semitones apart, creating a ratio of 3:2. Because this is the smallest ratio for an interval with two different note names, it is known to be a strong and stable interval.",
            image: Fifth,
            referenceSong: "Can't Help Falling In Love by Elvis Presley"
        },
        {
            name: "Perfect 4th",
            description: "The perfect fourth is an interval created by playing two notes that are five semitones apart, creating a ratio of 4:3. Because this ratio is only slightly larger than a perfect fifth, it is still very stable but distinguishably less so than the fifth.",
            image: Fourth,
            referenceSong: "We Wish You a Merry Christmas"
        }
    ]

    return (
        <div className='information'>
            {perfectIntervals.map((perfectInterval) => (
                <IntervalCard image={perfectInterval.image} name={perfectInterval.name} description={perfectInterval.description} referenceSong={perfectInterval.referenceSong} />
            ))}
        </div>
    )
}

export default PerfectIntervalList