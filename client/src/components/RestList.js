import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import WholeRest from '../images/Rhythms/WholeRest.png'
import HalfRest from '../images/Rhythms/HalfRest.png'
import QuarterRest from '../images/Rhythms/QuarterRest.png'
import EighthRest from '../images/Rhythms/EighthRest.png'
import SixteenthRest from '../images/Rhythms/SixteenthRest.png'

const RestList = () => {
    const rests = [
        {
            name: "Semibreve/Whole Note Rest",
            description: "As the name implies, a semibreve rest exists to create a silence to fill the length of a bar of 4/4, the same lenght as a standard semibreve note.",
            image: WholeRest
        },
        {
            name: "Minum/Half Note Rest",
            description: "As the name implies, a minum rest exists to create a silence to fill the length of half a bar of 4/4, the same length as a standard minum.",
            image: HalfRest
        },
        {
            name: "Crotchet/Quarter Note Rest",
            description: "As the name implies, a crotchet rest exists to create a silence to fill a quarter of the length of a bar of 4/4, the same length as a standard crotchet.",
            image: QuarterRest
        },
        {
            name: "Quaver/Eighth Note Rest",
            description: "As the name implies, a quaver rest exists to create a silence to fill an eighth of the length of a bar of 4/4, the same length as a standard quaver.",
            image: EighthRest
        },
        {
            name: "Semiquaver/Sixteenth Note Rest",
            description: "As the name implies, a semiquaver rest exists to create a silence to fill a sixteenth of the length of a bar of 4/4, the same length as a standard semiquaver.",
            image: SixteenthRest
        }
    ]

    return (
        <div className='information'>
            {rests.map((rest) => (
                <RhythmSymbolCard image={rest.image} name={rest.name} description={rest.description}/>
            ))}
        </div>
    )
}

export default RestList
