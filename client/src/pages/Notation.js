import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Notation = () => {
    return (
        <div id='notation'>
            <h3>Basic Music Notation</h3>
            <p></p>
            <div id='clefs'>
                <h4>Clefs</h4>
                <p></p>
            </div>
            <div id='accidentals'>
                <h4>Accidentals</h4>
                <p></p>
            </div>
            <div id='key-signatures'>
                <h4>Key Signatures</h4>
                <p></p>
            </div>
            <div id='time-signatures'>
                <h4>Time Signatures</h4>
                <p></p>
            </div>
        </div>
    )
    
}

export default Notation