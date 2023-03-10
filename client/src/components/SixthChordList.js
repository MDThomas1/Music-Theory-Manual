import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import MajSix from '../images/Chords/Maj6Chord.png'
import MinSix from '../images/Chords/Min6Chord.png'

const SixthChordList = () => {
    const sixthChords = [
        {
            name: "Major 6th",
            structure: "Major 3rd, Minor 3rd, Major 2nd",
            description: "The major sixth chord is created by taking a major triad and adding a note a major second above the fifth, creating a major sixth in relation to the root note. Since the major sixth is a fairly stable interval, this addition to the chord creates an extra level of brightness to the song without sacrificing the warmth of the as much as the inclusion of a major seventh.",
            image: MajSix
        },
        {
            name: "Minor 6th",
            structure: "'Minor 3rd, Major 3rd, Major 2nd'",
            description: "The minor sixth chord is created by taking a minor triad and adding a note a major second above the fifth, creating a major sixth in relation to the root note. Because the minor triad contains a minor, including a major sixth creates a tritone within the third, which creates an element of dissonance within the scale.",
            image: MinSix
        }
    ]

    return (
        <div className='information'>
            {sixthChords.map((sixthChord) => (
                <ChordScaleCard image={sixthChord.image} name={sixthChord.name} description={sixthChord.description} structure={sixthChord.structure} />
            ))}
        </div>
    )
}

export default SixthChordList