import React from 'react'

const IntervalCard = (props) => {
    return (
        <div className='card' key={props.name}>
            <img src={props.image} alt='Failed to load' />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>Reference Song: {props.referenceSong}</p>
        </div>
    )
}

export default IntervalCard