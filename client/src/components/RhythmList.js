import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import WholeNote from '../images/Rhythms/WholeNote.png'
import HalfNote from '../images/Rhythms/HalfNote.png'
import QuaterNote from '../images/Rhythms/QuaterNote.png'
import EighthNote from '../images/Rhythms/EighthNote.png'
import SixteenthNote from '../images/Rhythms/SixteenthNote.png'

const RhythmList = () => {
    const rhythms = [
        {
            name: "Semibreve/Whole Note",
            description: "A semibreve, or whole note, is the longest note commonly used, filling the space of a full bar of 4/4. If the number at the bottom of a time signature is 1, then each beat will be the length of a semibreve.",
            image: WholeNote
        },
        {
            name: "Minum/Half Note",
            description: "A minum, or half note, is the second longest note commonly used, filling the space of half a bar of 4/4. If the number at the bottom of a time signature is 2, then each beat will be the length of a minum.",
            image: HalfNote
        },
        {
            name: "Crotchet/Quarter Note",
            description: "A crotchet, or quarter note, is considered the most basic rhythm, filling a quarter of the space of a bar of 4/4. If the number at the bottom of a time singature is 4, then each beat wil be the length of a crotchet.",
            image: QuaterNote
        },
        {
            name: "Quaver/Eighth Note",
            description: "A quaver, or eighth note, is the second shortest rhythm commonly used, filling an eighth of the space of a bar of 4/4. If the number at the bottom of a time signature is 8, then each beat will be the length of a quaver.",
            image: EighthNote
        },
        {
            name: "Semiquaver/Sixteenth Note",
            description: "A semiquaver, or sixteenth note, is the shortest rhythm commonly used, filling a sixteenth of the space of a bar of 4/4. If the number at the bottom of a time signature is 16, then each beat will be the length of a semiquaver.",
            image: SixteenthNote
        }
    ]

    return (
        <div className='information'>
            {rhythms.map((rhythm) => (
                <RhythmSymbolCard image={rhythm.image} name={rhythm.name} description={rhythm.description}/>
            ))}
        </div>
    )
}

export default RhythmList