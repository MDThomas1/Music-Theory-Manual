import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import TrebleClef from '../images/Clefs/TrebleClef.png'
import BassClef from '../images/Clefs/BassClef.png'
import PercussionClef from '../images/Clefs/PercussionClef.png'

const ClefList = () => {

    const clefs = [
        {
            name: "Treble Clef",
            description: "The treble clef is the most commonly used clef in music, since there are many instruments that fall within it's range. As the name would suggest, it typically deals with higher voiced instruments. From the bottom up, the note values of each line are E G B D F and the note values of each space are F A C E. Since the treble clef is a G clef, the note placement can be remembered through knowing that the line in the middle of the clef's bottom half is a G.",
            image: TrebleClef
        },
        {
            name: "Bass Clef",
            description: "The bass clef, while not quite as common as the treble clef, is still a very commonly used clef which, as the name implies, is most commonly used for lower voiced, or bass, instruments. From the bottom up, the note values of each line are G B D F A and the note values of each space are A C E G. Since the bass clef is an F clef, the note placement can be remembered through knowing that the line between the two dots on the end of the clef is an F.",
            image: BassClef
        },
        {
            name: "Percussion Clef",
            description: "The percussion clef is the the most common clef utilised in modern music and is unique because it doesn't deal with pitch. Rather than indicating what pitch range should be used, it instead indicates that what's being written isn't for a pitched instrument. This clef, when used in composing pieces of music, is used for notating unpitched percussion.  It can be used with either the standard fives lines for a range of percussion instruments, like a drum kit, or a singulr line for percussion instruments with one or two variations.",
            image: PercussionClef
        }
    ]

    return (
        <div className='information'>
            {clefs.map((clef) => (
                <RhythmSymbolCard image={clef.image} name={clef.name} description={clef.description}/>
            ))}
        </div>
    )
}

export default ClefList