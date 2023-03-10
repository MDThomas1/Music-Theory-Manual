import React from 'react'

import IntervalCard from './Interval-Card'

import MinTwo from '../images/Intervals/Min2.png'
import MinThree from '../images/Intervals/Min3.png'
import MinSix from '../images/Intervals/Min6.png'
import MinSeven from '../images/Intervals/Min7.png'

const MinorIntervalList = () => {
    const minorIntervals = [
        {
            name: "Minor 2nd",
            description: "The minor second is an interval created by playing two notes that are exactly one semitone apart, creating a ratio of 16:15. Because these notes are very close together and the ratio is so large, the interval has quite an abrasive and unstable sound, even when compared to other minor intervals.",
            image: MinTwo,
            referenceSong: "Jaws Theme"
        },
        {
            name: "Minor 3rd",
            description: "The minor third is an interval created by playing two notes that are three semitones apart, creating a ratio of 6:5. Because this is the smallest ratio of any minor interval, it has the most stable sound, despite being darker than its major counterpart.",
            image: MinThree,
            referenceSong: "Georgia on my Mind"
        },
        {
            name: "Minor 6th",
            description: "The minor sixth is an interval created by playing two notes that are eight semitones apart, creating a ratio of 8:5. While less stable and darker and darker than its major counterpart, it still carries significantly less dissonance than the minor second and the minor seventh.",
            image: MinSix,
            referenceSong: "Go Down Moses"
        },
        {
            name: "Minor 7th",
            description: "The minor seventh is an interval created by playing two notes that are ten semitones apart, creating a ratio of 16:9. Despite the fact that it is still technically more dissonant than its major counterpart, the fact that they have such similar high ratios can make them tougher to distinguish and more interchangable than other intervals.",
            image: MinSeven,
            referenceSong: "Original Star Trek Theme"
        }
    ]

    return (
        <div className='information'>
            {minorIntervals.map((minorInterval) => (
                <IntervalCard image={minorInterval.image} name={minorInterval.name} description={minorInterval.description} referenceSong={minorInterval.referenceSong} />
            ))}
        </div>
    )
}

export default MinorIntervalList