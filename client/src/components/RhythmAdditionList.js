import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import Tie from '../images/Rhythms/Tie.png'
import Dot from '../images/Rhythms/Dot.png'

const RhythmAdditionList = () => {
    const rhythmAdditions = [
        {
            name: "Tie",
            description: "A tie is a rhythmic device used to connect the length of two seperate rhythms, meaning that a note should be held for the value of the second note in addition to the value of the first note.",
            image: Tie
        },
        {
            name: "Dot",
            description: "A dot is a rhythmic device that, when added to a note, it increases the length of a note by half of its original value. For example, if you were to put a dot on a minum, it would add the value of a crotchet to it.",
            image: Dot
        }
    ]

    return (
        <div className='information'>
            {rhythmAdditions.map((rhythmAddition) => (
                <RhythmSymbolCard image={rhythmAddition.image} name={rhythmAddition.name} description={rhythmAddition.description}/>
            ))}
        </div>
    )
}

export default RhythmAdditionList