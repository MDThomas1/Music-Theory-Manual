import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import HalfTriplet from '../images/Rhythms/HalfTriplet.png'
import QuarterTriplet from '../images/Rhythms/QuarterTriplet.png'
import EighthTriplet from '../images/Rhythms/EighthTriplet.png'
import SixteenthTriplet from '../images/Rhythms/SixteenthTriplet.png'

const TripletList = () => {
    const triplets = [
        {
            name: "Minum/Half Note Triplet",
            description: "A minum triplet is a grouping of three notes that evenly fits into a bar of 4/4, or the space taken up by two regular minums.",
            image: HalfTriplet
        },
        {
            name: "Crotchet/Quarter Note Triplet",
            description: "A crotchet triplet is a grouping of three notes that evenly fits into half a bar of 4/4, or the space taken up by two regular crotchets.",
            image: QuarterTriplet
        },
        {
            name: "Quaver/Eighth Note Triplet",
            description: "A quaver triplet is a grouping of three notes that evenly fits into the space of a standard crotchet, or the space taken up by two regular quavers.",
            image: EighthTriplet
        },
        {
            name: "Semiquaver/Sixteenth Note Triplet",
            description: "A seimquaver triplet is a grouping of three notes the evenly fits into the space of a standard quaver, or the space taken up by two regular semiquavers.",
            image: SixteenthTriplet
        }
    ]

    return (
        <div className='information'>
            {triplets.map((triplet) => (
                <RhythmSymbolCard image={triplet.image} name={triplet.name} description={triplet.description}/>
            ))}
        </div>
    )
}

export default TripletList