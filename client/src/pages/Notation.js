import React from 'react';

import ClefList from '../components/ClefList'
import AccidentalList from '../components/AccidentalList'
import KeySignatureList from '../components/KeySignatureList'

const Notation = () => {
    return (
        <div id='notation'>
            <h3>Basic Music Notation</h3>
            <p></p>
            <div id='clefs'>
                <h4>Clefs</h4>
                <p></p>
                <ClefList />
            </div>
            <div id='accidentals'>
                <h4>Accidentals</h4>
                <p></p>
                <AccidentalList />
            </div>
            <div id='key-signatures'>
                <h4>Key Signatures</h4>
                <p></p>
                <KeySignatureList />
            </div>
            <div id='time-signatures'>
                <h4>Time Signatures</h4>
                <p></p>
            </div>
        </div>
    )
    
}

export default Notation