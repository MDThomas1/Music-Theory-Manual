import React from 'react'

const ChordScaleCard = (props) => {
    return (
        <div className='card' key={props.name}>
            <img src={props.image} alt='Failed to load'/>
            <h4>{props.name}</h4>
            <p>Structure: {props.structure}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default ChordScaleCard