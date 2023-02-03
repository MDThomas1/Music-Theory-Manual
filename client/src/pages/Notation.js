import React from 'react';

import ClefList from '../components/ClefList'
import AccidentalList from '../components/AccidentalList'
import KeySignatureList from '../components/KeySignatureList'

const Notation = () => {
    return (
        <div id='notation'>
            <h3>Basic Music Notation</h3>
            <p>Before diving into the more theory-centred subjects, it's important to first explain a little about basic music notation, since all visual aids present in this website utilise it. In western music, individual notes are giving letter names from A to G, repeating over and over again along with some notes in between that will be explained in due time. Since only five of those notes exist, modern music works with a total of twelve notes. A helpful visual aid for this can be imagining the white key on a typical piano, as they all follow a clear pattern in relation to the black keys and are all attributed to a natural note value. Notation is the standard way of mapping out musical information so that it can be visually interpreted by other people. Typically, when deaing with instruments that have pitch, these notes are laid out across five horizontal lines running parrallel to eachother with even spaces in between, all of which carry a desginated letter value. While this page does not cover everything about reading music, it covers enough basic information to allow someone to interpret the information present within the website, that being <a href='#clefs'>clefs</a>, <a href='#accidentals'>accidentals</a>, <a href='key-signatures'>key signatures</a> and <a href='time-signatures'>time signatures</a>. All of these can be seen in the image provided.</p>
            <img />
            <div id='clefs'>
                <h4>Clefs</h4>
                <p>The first piece of information provided in any piece of music notation is the clef. Clefs are responsible for telling you the range of notes designated to each line and space. It is essential to have a clef in music notation since, without one, there is nothing to tell you what notes you are supposed to be reading. While there have been many used throughout history as they were commonly associated with different vocal ranges, most of them have become obsolete in modern music and only three are commonly used today. Information on all three is provided below.</p>
                <ClefList />
            </div>
            <div id='accidentals'>
                <h4>Accidentals</h4>
                <p>Immediately after the clef in a piece of music is the key signature. However before we can discuss that we have to first discuss what they're made of: accidentals. Accidentals are special symbols that can be used to raise or lower the pitch of a note by small amounts. Returning to the analogy of a piano, accidentals are how we utilise the black keys, the notes between notes with letter names. It's important to note that, since there are accidentals for raising and lowering pitch, notes can end up having multiple names despite being the same pitch.</p>
                <AccidentalList />
            </div>
            <div id='key-signatures'>
                <h4>Key Signatures</h4>
                <p>Now that we have covered accidentals, we can discussed how they are used in key signatures. In a nutshell, any note designated with an accidental in the key signature of a piece of music notation must be played with that accidental unless specified otherwise. There are fifteen key signatures in total, all of which are composed of either entirely sharps or entirely flats, with only one exception containing nothing. Additionally, each key signature comes associated with a major and a minor tonality depending on what's known as the root note. This is further explained in the section on scales</p>
                <KeySignatureList />
            </div>
            <div id='time-signatures'>
                <h4>Time Signatures</h4>
                <p>The final element to be discussed in relation to music notation is the time signature. Time singatures can be best described as a way of mapping out the pulse of a piece of music, also known as the beat. When mapping out points of emphasis within a piece of music, we generally doing it by dividing pieces of the song on points in the beat which carry the greatest amount of emphasis. These points are marked by vertical lines drawn over the five horizontal lines. The space between these vertical lines is known as a bar, also commonly known as a measure, and time signatures are our way of describing how long a bar should be. Time signatures are made up of two notes, one on top and one on the bottom. The top number determines how many beats are present within each bar and can be any number. The bottom number, however, describes how long each beat is, which is further in the rhythm section, and can only be a power of 2, such as 4, 8, 16 etc. 4/4, as demonstrated here is the most common time signature but other popular ones include 3/4, 6/8, 5/4 and 7/8.</p>
                <img></img>
            </div>
        </div>
    )
    
}

export default Notation