import React from 'react';

import RhythmList from '../components/RhythmList'
import RestList from '../components/RestList'
import TripletList from '../components/TripletList';
import RhythmAdditionList from '../components/RhythmAdditionList'

const Rhythm = () => {
    return (
        <div id='rhythm'>
            <h3>Rhythm</h3>
            <p></p>
            <div id='common-rhythms'>
                <h4>Common Rhythms</h4>
                <p></p>
                <RhythmList />
            </div>
            <div id='rests'>
                <h4>Rests</h4>
                <p></p>
                <RestList />
            </div>
            <div id='triplets'>
                <h4>Triplets</h4>
                <p></p>
                <TripletList />
            </div>
            <div id='additions'>
                <h4>Additional Rhythmic Symbols</h4>
                <p></p>
                <RhythmAdditionList />
            </div>
        </div>
    )
}

export default Rhythm