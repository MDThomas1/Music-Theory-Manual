const User = require('./User')

const Clef = require('./Clef')
const Accidental = require('./Accidental')
const KeySignature = require('./KeySig')

const Rhythm = require('./Rhythm')
const Rest = require('./Rest')
const Triplet = require('./Triplet')
const RhythmAddition = require('./RhythmAddition')

const PerfectInterval = require('./PerfectInterval')
const MajorInterval = require('./MajorInterval')
const MinorInterval = require('./MinorInterval')

const MajorMode = require('./MajorMode')
const Pentatonic = require('./Pentatonic')
const OtherScale = require('./OtherScale')

const Triad = require('./Triad')
const SusChord = require('./SusChord')
const SixthChord = require('./SixthChord')
const SeventhChord = require('./SeventhChord')

module.exports = {
    User, 
    Clef, 
    Accidental, 
    KeySignature, 
    Rhythm, 
    Rest, 
    Triplet, 
    RhythmAddition,
    PerfectInterval, 
    MajorInterval, 
    MinorInterval, 
    MajorMode, 
    Pentatonic, 
    OtherScale, 
    Triad, 
    SusChord, 
    SixthChord, 
    SeventhChord 
}