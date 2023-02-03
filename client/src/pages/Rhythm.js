import React from 'react';

import RhythmList from '../components/RhythmList'
import RestList from '../components/RestList'
import TripletList from '../components/TripletList';
import RhythmAdditionList from '../components/RhythmAdditionList'

const Rhythm = () => {
    return (
        <div id='rhythm'>
            <h3>Rhythm</h3>
            <p>While rhythm can be a tricky concept to explain, it can best be thought of as where we place notes in relation to the beat of a piece of music. When used in variation with one another they can create a unique form of interest in music that can't be provided any other way. Rhythms can be expanded and divided by almost an infinite amount but, since most of these are not often used, this page provides only the most common and practical <a href='#common-rhythms'>rhythmic values</a>, along with their associated <a href='#rests'>rests</a>and <a href='#triplets'>triplets</a>, as well as a couple of <a href='#additions'>symbols</a>used in rhythmic notation</p>
            <div id='common-rhythms'>
                <h4>Common Rhythms</h4>
                <RhythmList />
            </div>
            <div id='rests'>
                <h4>Rests</h4>
                <p>Rests are symbols that carry the same value as the rhythm they share names with, but rather than showing the length a note should be held, they show the length of a period of silence in music. These are important as silence in music is often used to create variation in the rhythmic intensity of a song as well as its structural density.</p>
                <RestList />
            </div>
            <div id='triplets'>
                <h4>Triplets</h4>
                <p>In music where beat is being rhythmically divided through powers of two, triplets are a common way to add variation to that format. As the name would by, triplets are evenly spaced groupings of three notes. However in order to fit them neatly within a bar, they will be compressed and played evenly within the time it would normally take to play two notes of the same value.</p>
                <TripletList />
            </div>
            <div id='additions'>
                <h4>Additional Rhythmic Symbols</h4>
                <RhythmAdditionList />
            </div>
        </div>
    )
}

export default Rhythm