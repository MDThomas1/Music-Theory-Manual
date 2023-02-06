import React from 'react'

import ChordScaleCard from './Chord-Scale-Card'

import Ionian from '../images/Scales/Ionian.png'
import Dorian from '../images/Scales/Dorian.png'
import Phrygian from '../images/Scales/Phrygian.png'
import Lydian from '../images/Scales/Lydian.png'
import Mixolydian from '../images/Scales/Mixolydian.png'
import Aeolian from '../images/Scales/Aeolian.png'
import Locrian from '../images/Scales/Locrian.png'

const MajorModeList = () => {
    const majorModes = [
        {
            name: "Ionian/Major",
            structure: "Tone, Tone, Semitone, Tone, Tone, Tone, Semitone",
            description: "The major scale, also called the ionian mode, is considered the most stable and warm scale in western music. Because of this quality, the notes it consists of are used to determine the major classifications of key signatures.",
            image: Ionian
        },
        {
            name: "Dorian",
            structure: "Tone, Semitone, Tone, Tone, Tone, Semitone, Tone",
            description: "The dorian scale is a mode created by starting on the second degree of the major scale, structured as a major scale with the third and seventh scale degrees lowered a semitone. Because of this, while it has the overall quality of a minor scale, it gives a warmer tone when compared to others.",
            image: Dorian
        },
        {
            name: "Phrygian",
            structure: "Semitone, Tone, Tone, Tone, Semitone, Tone, Tone",
            description: "The phrygian scale is a mode created by starting on the third degree of the major scale, structured as a major scale with the second, third, sixth and seventh scale degrees lowered a semitone. Because of this, it is an extremely dark sounding minor scale, second only to the locrian scale.",
            image: Phrygian
        },
        {
            name: "Lydian",
            structure: "Tone, Tone, Tone, Semitone, Tone, Tone, Semitone",
            description: "The lydian scale is a mode created by starting on the fourth degree of the major scale, structured as a major scale with the fourth scale degree raised a semitone. Because of this, this scale has the brightest quality of all the major modes but the inclusion of a tritone in relation to the starting note reduces its warmth.",
            image: Lydian
        },
        {
            name: "Mixolydian",
            structure: "Tone, Tone, Semitone, Tone, Tone, Semitone, Tone",
            description: "The mixolydian scale is a mode created by starting on the fifth degree of the major scale, structured as a major scale with the seventh scale degree lowered a semitone. This lowered seventh has the opposite effect of the raised fourth in the lydian scale, reducing the brightness of the scale but increasing warmth.",
            image: Mixolydian
        },
        {
            name: "Aeolian/Natural Minor",
            structure: "Tone, Semitone, Tone, Tone, Semitone, Tone, Tone",
            description: "The aeolian scale, also called the natural minor scale, is a mode created by starting on the sixth degree of the major scale, structured as a major scale with the third, sixth and seventh scale degrees lowered a semitone. This scale is considered to be the default minor scale and is used to determined the minor classification of a key signature.",
            image: Aeolian
        },
        {
            name: "Locrian",
            structure: "Semitone, Tone, Tone, Semitone, Tone, Tone, Tone",
            description: "The locrian scale is a mode created by starting on the seventh degree of the major scale, structured as a major scale the second, third, fifth, sixth and seventh scale degrees lowered a semitone. Because this scale doesn't contain a perfect fifth in relation to the starting note, it is almost never used, due its highly unstable nature.",
            image: Locrian
        }
    ]

    return (
        <div className='information'>
            {majorModes.map((majorMode) => (
                <ChordScaleCard image={majorMode.image} name={majorMode.name} description={majorMode.description} structure={majorMode.structure} />
            ))}
        </div>
    )
}

export default MajorModeList