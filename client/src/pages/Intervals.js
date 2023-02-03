import React from 'react';

import PerfectIntervalList from '../components/PerfectIntervalList'
import MajorIntervalList from '../components/MajorIntervalList'
import MinorIntervalsList from '../components/MinorIntervalList'

const Intervals = () => {
    return (
        <div id='intervals'>
            <h3>Intervals</h3>
            <p>In music, the term 'interval' is used to describe the relationship between two notes. Because each note has its own frequency, which can be represented as a number, the relationship between two different notes creates a ratio. The ratio of a musical interval is the cause of how it sounds, with ratios composed of smaller numbers creating more stable intervals and those composed of larger numbers creating more dissonant intervals. This page focuses solely on intervals with two notes of the same letter name, divided into <a href='#perfect-intervals'>perfect intervals</a>, <a href='#major-intervals'>major intervals</a>, <a href='#minor-intervals'>minor intervals</a> and the very unique <a href='#tritone'>tritone</a></p>
            <div id='perfect-intervals'>
                <h4>Perfect Intervals</h4>
                <PerfectIntervalList />
            </div>
            <div id='major-intervals'>
                <h4>Major Intervals</h4>
                <MajorIntervalList />
            </div>
            <div id='minor-intervals'>
                <h4>Minor Intervals</h4>
                <MinorIntervalsList />
            </div>
            <div id='tritone'>
                <h4>Tritone</h4>
                <img />
                <p>The tritone, also known as the augmented fourth or the diminished fifth, is a unique interval as it rests evenly between two perfect intervals and, in terms of notes, lies halfway between two notes in an octave. However despite it's position, its ratio of 45:32 gives it a very unstable sound that carries more tension that just about any other interval. While it is commonly used, it is always always in moderation as prolonged tension in music is often not the goal of composers.</p>
            </div>
        </div>
    )
}

export default Intervals

