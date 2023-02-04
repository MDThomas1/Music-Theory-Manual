import React from 'react';

import MajorModeList from '../components/MajorModeList'
import PentatonicList from '../components/PentatonicList'
import OtherScaleList from '../components/OtherScaleList'

const Scales = () => {
    return (
        <div id='scales' className='page'>
            <h3>Scales</h3>
            <p>A scale is a brief sequence of notes that much like an interval, carries its own unique sound and character. Because of this fact they are often used as the catalyst for creating both a harmonic structure and a melodic tone in a piece of music. Typically, scales consist of seven notes, with one for each letter name, but scales with more and less notes also exist. While there are hundreds of scales out there, this page contains the most commonly used, divided into <a href='#major-modes'>major modes</a>, <a href='#pentatonic-scales'>pentatonic scales</a> and <a href='#useful-scales'>a few others</a> that will prove useful to know. All scale visuals are presented ascending from C for ease of comparison.</p>
            <div id='major-modes'>
                <h4>Major Modes</h4>
                <p>The different notes that make up the structure of a scale are known as scale degrees and, simply put, modes are created by taking the same sequence of notes that make up one scale and starting at a different scale degree, creating a new sound. Every scale can used be used to create modes but the modes of the major scale are the most commonly used in writing music since they fit neatly with key signatures.</p>
                <MajorModeList />
            </div>
            <div id='pentatonic-scales'>
                <h4>Pentatonic Scales</h4>
                <p>As the name implies, pentatonic scales are scales that contain only five notes, rather than the usual seven. The result of this is that while they share most notes with other common scales, two notes responsible for creating semitones in the scale are removed. This means that the scale as a whole carries much less tension, makes them popular in contemporary music.</p>
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