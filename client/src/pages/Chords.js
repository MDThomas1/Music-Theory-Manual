import React from 'react';

import TriadList from '../components/TriadList'
import SusChordList from '../components/SusChordList'
import SixthChordList from '../components/SixthChordList'
import SeventhChordList from '../components/SeventhChordList'

const Chords = () => {
    return (
        <div id='chords'>
            <h3>Chords</h3>
            <p></p>
            <div id='standard-triads'>
                <h4>Standard Triads</h4>
                <p></p>
                <TriadList />
            </div>
            <div id='suspended-chords'>
                <h4>Suspended Chords</h4>
                <p></p>
                <SusChordList />
            </div>
            <div id='sixth-chords'>
                <h4>Sixth Chords</h4>
                <p></p>
                <SixthChordList />
            </div>
            <div id='seventh-chords'>
                <h4>Seventh Chords</h4>
                <p></p>
                <SeventhChordList />
            </div>
        </div>
    )
}

export default Chords