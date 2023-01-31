import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Intervals = () => {
    return (
        <div id='intervals'>
            <h3>Intervals</h3>
            <p></p>
            <div id='perfect-intervals'>
                <h4>Perfect Intervals</h4>
                <p></p>
            </div>
            <div id='major-intervals'>
                <h4>Major Intervals</h4>
                <p></p>
            </div>
            <div id='minor-intervals'>
                <h4>Minor Intervals</h4>
                <p></p>
            </div>
            <div id='tritone'>
            </div>
        </div>
    )
}

export default Intervals

