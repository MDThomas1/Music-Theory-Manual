import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import SusFour from '../images/Chords/Sus4.png'
import SusTwo from '../images/Chords/Sus2.png'

const SusChordList = () => {
    const susChords = [
        {
            name: "Suspended 4th",
            structure: "Perfect 4th, Major 2nd",
            description: "The suspended fourth chord is structured in the same way of a standard triad but substitutes a third for a perfect fourth in relation to the root note. Because of this, while it is made of stable intervals when compared to the starting note, the difference between the fourth and the fifth creates a greater amount of dissonance compared to a major chord.",
            image: SusFour
        },
        {
            name: "Suspended 2nd",
            structure: "Minor 2nd, Perfect 4th",
            description: "The suspended second chord is structured in the same way as a standard triad but substitutes a third for a major second in relation to the root note. Because of this, the dissonance that is created by the substituted note is even more apparent than it is in the suspended fourth chord because the dissonant interval exists in relation to the root note.",
            image: SusTwo
        }
    ]

    return (
        <div className='information'>
            {susChords.map((susChord) => (
                <ChordScaleCard image={susChord.image} name={susChord.name} description={susChord.description} structure={susChord.structure} />
            ))}
        </div>
    )
}

export default SusChordList