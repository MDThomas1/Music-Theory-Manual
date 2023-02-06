import React from 'react'

import IntervalCard from './Interval-Card'

import MajTwo from '../images/Intervals/Maj2.png'
import MajThree from '../images/Intervals/Maj3.png'
import MajSix from '../images/Intervals/Maj6.png'
import MajSeven from '../images/Intervals/Maj7.png'


const MajorIntervalList = () => {
    const majorIntervals = [
        {
            name: "Major 2nd",
            description: "The major second is an interval created by playing two notes exactly one tone apart, creating a ratio of 9:8. Because the two notes are so close together, they can sound quite dissonant when played together, though not as much as its minor counterpart.",
            image: MajTwo,
            referenceSong: "Frère Jacques"
        },
        {
            name: "Major 3rd",
            description: "The major third is an interval created by playing two notes four semitones apart, creating a ratio of 5:4. Because of this interval having a smaller ratio than other major intervals, it has a quite warm and bright sound when the two notes are played together.",
            image: MajThree,
            referenceSong: "When the Saints Go Marching In"
        },
        {
            name: "Major 6th",
            description: "The major sixth is an interval created by playing two notes nine semitones apart, creating a ratio of 5:3. Like the major third, this interval has a quite warm and bright sound when compared to other intervals when played together due to its smaller ratio.",
            image: MajSix,
            referenceSong: "My Bonnie Lies Over the Ocean"
        },
        {
            name: "Major 7th",
            description: "The major seventh is an interval created by played two notes eleven semitones apart, creating a ratio of 15:8. Because this interval produces the highest frequency ratio of all major intervals, it is by far the unstable of all of them, despite being so close to the octave.",
            image: MajSeven,
            referenceSong: "Take On Me by Aha"
        }
    ]

    return (
        <div className='information'>
            {majorIntervals.map((majorInterval) => (
                <IntervalCard image={majorInterval.image} name={majorInterval.name} description={majorInterval.description} referenceSong={majorInterval.referenceSong} />
            ))}
        </div>
    )
}

export default MajorIntervalList