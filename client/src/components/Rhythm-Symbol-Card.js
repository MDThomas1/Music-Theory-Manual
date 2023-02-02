import React from 'react'

const RhythmSymbolCard = (props) => {
    return (
        <div className='card'>
            <img src={props.image} />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default RhythmSymbolCard