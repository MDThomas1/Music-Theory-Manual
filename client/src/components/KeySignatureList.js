import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import NoAccs from '../images/Keys/NoAccs.png'
import OneSharp from '../images/Keys/1sharp.png'
import OneFlat from '../images/Keys/1flat.png'
import TwoSharp from '../images/Keys/2sharp.png'
import TwoFlat from '../images/Keys/2flat.png'
import ThreeSharp from '../images/Keys/3sharp.png'
import ThreeFlat from '../images/Keys/3flat.png'
import FourSharp from '../images/Keys/4sharp.png'
import FourFlat from '../images/Keys/4flat.png'
import FiveSharp from '../images/Keys/5sharp.png'
import FiveFlat from '../images/Keys/5flat.png'
import SixSharp from '../images/Keys/6sharp.png'
import SixFlat from '../images/Keys/6flat.png'
import SevenSharp from '../images/Keys/7sharp.png'
import SevenFlat from '../images/Keys/7flat.png'

const KeySignatureList = () => {
    const keySignatures = [
        {
            name: "C major/A minor",
            description: "C major, or A minor is the most basic key as it contains no accidentals. Because of this, it is the easiest key to read because everything is as it appears.",
            image: NoAccs
        },
        {
            name: "G major/E minor",
            description: "G major, or E minor, is a commonly used key signature that only contains one sharp, that being F♯. Like C, its minimal content makes it very easy to read.",
            image: OneSharp
        },
        {
            name: "F major/D minor",
            description: "F major, or D minor, is a commonly used key signature that only contains one flat, that being B♭. Like C, its minimal content makes it very easy to read.",
            image: OneFlat
        },
        {
            name: "D major/B minor",
            description: "D major, or B minor, is a commonly used key signature that contains two sharps. The order of the sharps is always F♯ C♯. Like C, its minimal content makes it very easy to read.",
            image: TwoSharp
        },
        {
            name: "B♭ major/G minor",
            description: "B♭ major, or G minor, is a commonly used key signature that contains two flats. The order of the flats is always B♭ E♭. Like C, its minimal content makes it very easy to read.",
            image: TwoFlat
        },
        {
            name: "A major/F♯ minor",
            description: "A major, or F♯ minor, is a commonly used key signature that contains three sharps. The order of the sharps is always F♯ C♯ G♯. Like C, its minimal content makes it very easy to read.",
            image: ThreeSharp
        },
        {
            name: "E♭ major/C minor",
            description: "E♭ major, or C minor, is a commonly used key signature that contains three flats. The order of the flats is always B♭ E♭ A♭. Like C, its minimal content makes it very easy to read.",
            image: ThreeFlat
        },
        {
            name: "E major/C♯ minor",
            description: "E major, or C♯ minor, is a commonly used key signature that contains four sharps. The order of the sharps is always F♯ C♯ G♯ D♯. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: FourSharp
        },
        {
            name: "A♭ major/F minor",
            description: "A♭ major, or F minor, is a commonly used key signature that contains four flats. The order of the sharps is always B♭ E♭ A♭ D♭. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: FourFlat
        },
        {
            name: "B major/G♯ minor",
            description: "B major, or G♯ minor, is a less commonly used key signature that contains five sharps. The order of the sharps is always F♯ C♯ G♯ D♯ A♯. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: FiveSharp
        },
        {
            name: "D♭ major/B♭ minor",
            description: "D♭ major, or F minor, is a less commonly used key signature that contains five flats. The order of the sharps is always B♭ E♭ A♭ D♭ G♭. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: FiveFlat
        },
        {
            name: "F♯ major/D♯ minor",
            description: "F♯ major, or D♯ minor, is a less commonly used key signature that contains six sharps. The order of the sharps is always F♯ C♯ G♯ D♯ A♯ E♯. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: SixSharp
        },
        {
            name: "G♭ major/E♭ minor",
            description: "G♭ major, or E♭ minor, is a less commonly used key signature that contains six flats. The order of the sharps is always B♭ E♭ A♭ D♭ G♭ C♭. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: SixFlat
        },
        {
            name: "C♯ major/A♯ minor",
            description: "F♯ major, or D♯ minor, is a less commonly used key signature that contains seven sharps. The order of the sharps is always F♯ C♯ G♯ D♯ A♯ E♯ B♯. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: SevenSharp
        },
        {
            name: "C♭ major/A♭ minor",
            description: "C♭ major, or A♭ minor, is a less commonly used key signature that contains seven flats. The order of the sharps is always B♭ E♭ A♭ D♭ G♭ C♭ F♭. It higher number of accidentals can mean it is harder to read than smaller key signatures.",
            image: SevenFlat
        }
    ]

    return (
        <div className='information'>
            {keySignatures.map((keySignature) => (
                <RhythmSymbolCard image={keySignature.image} name={keySignature.name} description={keySignature.description}/>
            ))}
        </div>
    )
}

export default KeySignatureList