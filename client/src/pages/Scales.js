import React from 'react';

import MajorModeList from '../components/MajorModeList'
import PentatonicList from '../components/PentatonicList'
import OtherScaleList from '../components/OtherScaleList'

const Scales = () => {
    return (
        <div id='scales'>
            <h3>Scales</h3>
            <p></p>
            <div id='major-modes'>
                <h4>Major Modes</h4>
                <p></p>
                <MajorModeList />
            </div>
            <div id='pentatonic-scales'>
                <h4>Pentatonic Scales</h4>
                <p></p>
                <PentatonicList />
            </div>
            <div id='useful-scales'>
                <h4>Other Useful Scales</h4>
                <OtherScaleList />
            </div>
        </div>
    )
}

export default Scales