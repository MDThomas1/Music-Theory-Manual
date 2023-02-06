import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import Blues from '../images/Scales/Blues.png'
import HarmonicMin from '../images/Scales/HarmonicMin.png'

const OtherScaleList = () => {
    const otherScales = [
        {
            name: "Blues Scale",
            structure: "Minor 3rd, Tone, Semitone, Semitone, Minor 3rd, Tone",
            description: "The blues scale is a six note variation of the minor pentatonic scale that includes the tritone played inbetween the perfect fourth and the perfect fifth. Because of this addition, the blues scale has a brighter quality than the minor pentatonic scale due to the added dissonance, which can be used for more colorful songwriting but doesn't really allow for creating harmony in a song.",
            image: Blues
        },
        {
            name: "Harmonic Minor",
            structure: "Tone, Semitone, Tone, Tone, Semitone, Minor 3rd, Semitone",
            description: "The harmonic minor scale is best thought of as a variation of the natural minor scale where the seventh scale degree is raised a semitone, creating a distance of three semitone between the sixth and seventh scale degrees. Because of this change, like with the tritone in the blues scale, there's a brighter sound created that can open many different angle to approach to harmonic content of a piece of music.",
            image: HarmonicMin
        }
    ]

    return (
        <div className='information'>
            {otherScales.map((otherScale) => (
                <ChordScaleCard image={otherScale.image} name={otherScale.name} description={otherScale.description} structure={otherScale.structure} />
            ))}
        </div>
    )
}

export default OtherScaleList