import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import MajChord from '../images/Chords/MajChord.png'
import MinChord from '../images/Chords/MinChord.png'
import DimChord from '../images/Chords/DimChord.png'
import AugChord from '../images/Chords/AugChord.png'

const TriadList = () => {
    const triads = [
        {
            name: "Major",
            structure: "Major 3rd, Minor 3rd",
            description: "The major triad is created by taking the first (referred to in chords as the root), third and fifth degrees of the major scale and stacking them on top of one another to create a chord. Because these notes are directly from the major scale and are constructed from very stable intervals, this chord is considered to be the basic, carrying more warmth than any other.",
            image: MajChord
        },
        {
            name: "Minor",
            structure: "Minor 3rd, Major 3rd",
            description: "The minor triad is created by taking the root, third and fifth degrees from the natural minor scale and stacking them on top of one another to create a chord. Much like the major chord, the minor chord inherits many of the same sonic qualities as the scale it was made from, being darker in tone than the major scale. However it is also constructed entirely with stable intervals, making it warmer than variations of it discussed later on.",
            image: MinChord
        },
        {
            name: "Diminished",
            structure: "Minor 3rd, Minor 3rd",
            description: "The diminished chord is created by taking a minor triad and lowering the fifth by a semitone, creating a tritone with the root note. Because there is now an extremely unstable interval in the construction of the chord and the major third in the original minor chord is gone, the dimished chord is significantly more dissonant than the minor chord, sacrificing essentially all of its stability.",
            image: DimChord
        },
        {
            name: "Augmented",
            structure: "Major 3rd, Minor 3rd",
            description: "The augmented chord is created by taking a major triad and raising the fifth by a semitone, creating what's called an augmented fifth with the root note. Because an augmented fifth is enharmonic to a minor sixth, a much less stable interval than the perfect fifth, the augmented chord is significantly less stable than the major chord, sacrificing most of the major chord's warmth.",
            image: AugChord
        }
    ]

    return (
        <div className='information'>
            {triads.map((triad) => (
                <ChordScaleCard image={triad.image} name={triad.name} description={triad.description} structure={triad.structure} />
            ))}
        </div>
    )
}

export default TriadList