import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import MajSeven from '../images/Chords/Maj7Chord.png'
import MinSeven from '../images/Chords/Min7Chord.png'
import DomSeven from '../images/Chords/Dom7.png'
import MinMajSeven from '../images/Chords/MinMaj7.png'
import HalfDim from '../images/Chords/Halfdim.png'
import FullDim from '../images/Chords/Fulldim.png'

const SeventhChordList = () => {
    const seventhChords = [
        {
            name: "Major 7th",
            structure: "Major 3rd, Minor 3rd, Major 3rd",
            description: "The major seventh chord is created by taking a major triad and adding a note a major third above the fifth, creating a major seventh with the root note. Because the major seventh is carries a higher amount of dissonance than anything within the major triad, the result of adding it is the chord loses some of its stability and warmth, instead gaining a brighter sound.",
            image: MajSeven
        },
        {
            name: "Minor 7th",
            structure: "Minor 3rd, Major 3rd, Minor 3rd",
            description: "The minor seventh chord is created by taking a minor triad and adding a note a minor third above the fifth, creating a minor seventh with the root note. Similarly to the major seventh chord, the addition of an interval more dissonant than anything within the original triad means that some of that triad's stability becomes lost in favor of a more dissonant sound.",
            image: MinSeven
        },
        {
            name: "Dominant 7th",
            structure: "Major 3rd, Minor 3rd, Minor 3rd",
            description: "The dominant seventh chord is created by taking a major triad and adding a note a minor third above the fifth, creating a minor seventh with the root note. Because the third of the chord is major and the seventh of the chord is minor, a tritone is created between the two notes. This means that, while it is built on a major chord, it has an addition tension, setting it appart from a major seventh chord.",
            image: DomSeven
        },
        {
            name: "Minor Major 7th",
            structure: "Minor 3rd, Major 3rd, Major 3rd",
            description: "The minor major seventh chord is created by taking a minor triad and adding a note a major third above the fifth, creating a major seventh with the root note. Because of the addition of a major seventh rather than the much more common minor seventh, an augmented triad is created through the third, fifth and seventh. The brightness created by this balances out the minor third at the start of the chord.",
            image: MinMajSeven
        },
        {
            name: "Half Diminshed Chord",
            structure: "Minor 3rd, Minor 3rd, Major 3rd",
            description: "The half diminished chord is created by taking a diminished triad and adding a note a major third above the fifth, creating a minor seventh with the root note. Despite the fact that the seventh creates a perfect fifth with the third, the addition of a quite dissonant minor interval adds to the tension of the chord, though not to the extent of the full diminished.",
            image: HalfDim
        },
        {
            name: "Full Diminished Chord",
            structure: "Minor 3rd, Minor 3rd, Minor 3rd",
            description: "The full diminished chord is created by taking a diminished triad and adding a note a minor third above the fifth, creating what's called a diminished seventh from the rote note. Since a diminished seventh is enharmonic with a major sixth, adding that additional note creates a tritone between the third and the seventh, creating a second tritone and furthering the dissonance.",
            image: FullDim
        }
    ]

    return (
        <div className='information'>
            {seventhChords.map((seventhChord) => (
                <ChordScaleCard image={seventhChord.image} name={seventhChord.name} description={seventhChord.description} structure={seventhChord.structure} />
            ))}
        </div>
    )
}

export default SeventhChordList