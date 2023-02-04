import React from 'react';

import TriadList from '../components/TriadList'
import SusChordList from '../components/SusChordList'
import SixthChordList from '../components/SixthChordList'
import SeventhChordList from '../components/SeventhChordList'

const Chords = () => {
    return (
        <div id='chords' className='page'>
            <h2>Chords</h2>
            <p>If intervals are the sound created by grouping two notes together, then chords can be best explained as the relationship by groupings of three or more notes played together. Chords are commonly used in music as the main way of building harmonic content, emerging from the structure of whatever scale the song is based around. They are often thought of in terms of scale degrees since the two concepts relate so closely to one another and play very similar roles. While there are hundreds of structures used to create chords in western music, this pages focuses on the ones that most often occur and are used as the building blocks for larger chords. These chords are grouped into <a href='#standard-triads'>standard triads</a>, <a href='#suspended-chords'>suspended chords</a>, <a href='#sixth-chords'>sixth chords</a> and <a href='#seventh-chords'>seventh chords</a>.</p>
            <div id='standard-triads'>
                <h3>Standard Triads</h3>
                <TriadList />
            </div>
            <div id='suspended-chords'>
                <h3>Suspended Chords</h3>
                <SusChordList />
            </div>
            <div id='sixth-chords'>
                <h3>Sixth Chords</h3>
                <SixthChordList />
            </div>
            <div id='seventh-chords'>
                <h3>Seventh Chords</h3>
                <SeventhChordList />
            </div>
        </div>
    )
}

export default Chords