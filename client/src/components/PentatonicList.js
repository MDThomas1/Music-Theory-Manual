import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import MajPent from '../images/Scales/MajPent'
import MinPent from '../images/Scales/MinPent'

const PentatonicList = () => {
    const pentatonics = [
        {
            name: "Major Pentatonic",
            structure: "Tone, Tone, Minor 3rd, Tone, Minor 3rd",
            description: "The major pentatonic scale is a variation of the major scale where the fourth and seventh scale degree have been removed. Because this means that semitones no longer occur within the scale, there is a greater amount of warmth present within the scale, at the expense of some of the brighter interval present in the major scale's structure.",
            image: MajPent
        },
        {
            name: "Minor Pentatonic",
            structure: "Minor 3rd, Tone, Tone, Minor 3rd, Tone",
            description: "The minor pentatonic scale is a variation of the natural minor scale where the second and sixth scale degrees have been removed. Like with the major pentatonic scale, this removes all semitones from the scale, removing some of the tension present within the natural minor scale and creating a greater amount of warmth to this new scale.",
            image: MinPent
        }
    ]

    return (
        <div className='information'>
            {pentatonics.map((pentatonic) => (
                <ChordScaleCard image={pentatonic.image} name={pentatonic.name} description={pentatonic.description} structure={pentatonic.structure} />
            ))}
        </div>
    )
}

export default PentatonicList
