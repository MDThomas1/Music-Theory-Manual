import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import Sharp from '../images/Accidentals/Sharp.png'
import Flat from '../images/Accidentals/Flat.png'
import Natural from '../images/Accidentals/Natural.png'
import DoubleSharp from '../images/Accidentals/DoubleSharp.png'
import DoubleFlat from '../images/Accidentals/DoubleFlat.png'

const AccidentalList = () => {
    

    const accidentals = [
        {
            name: "Sharp",
            description: "A sharp is a symbol used to raise the pitch of a note to that of the immediate next note, which is usually a black key but not always. This distance is also known as a semitone.",
            image: Sharp
        },
        {
            name: "Flat",
            description: "A flat works similarly to a sharp but instead of raising the pitch of a note, it lowers it by a semitone. Like with sharps, this would often be a black key on a piano but not always.",
            image: Flat
        },
        {
            name: "Natural",
            description: "The role of the natural symbol is to reset the pitch of a note to its basic letter name without any alteration. The most common use of this is to temporarily counteract the effect of a key signature, which is discussed below. ",
            image: Natural
        },
        {
            name: "Double Sharp",
            description: "A double sharp, represented by an x, increases the pitch of a note by two semitones, also known as a tone, rather than one. Since this is often a white key, meaning it's enharmonic to another note value, it's important to note that the letter name of the note stay the same.",
            image: DoubleSharp
        },
        {
            name: "Double Flat",
            description: "Like with a double sharp, a double flat, represented by two flats together, moves the pitch down like a regular flat but for a tone rather than a semitone. Like with double sharps, it's important to note that the letter name of the note stays the same, despite it being enharmonic with another.",
            image: DoubleFlat
        }
    ]

    return (
        <div className='information'>
            {accidentals.map((accidental) => (
                <RhythmSymbolCard image={accidental.image} name={accidental.name} description={accidental.description}/>
            ))}
        </div>
    )
}

export default AccidentalList
