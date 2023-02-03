import React from 'react'

const IntervalCard = (props) => {
    return (
        <div className='card'>
            <img src={props.image} />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <p>Reference Song: {props.referenceSong}</p>
        </div>
    )
}

export default IntervalCard