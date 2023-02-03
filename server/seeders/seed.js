const db = require('../config/connection');

const { 
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
} = require('../models');

const userSeeds = require('./userSeeds.json');

const clefSeeds = require('./clefSeeds.json')
const accidentalSeeds = require('./accidentalSeeds.json')
const keySigSeeds = require('./keySigSeeds.json')

const rhythmSeeds = require('./rhythmSeeds.json');
const restSeeds = require('./restSeeds.json')
const tripletSeeds = require('./tripletSeeds.json')
const rhythmAdditionSeeds = require('./rhythmAdditionSeeds.json')

const perfectIntervalSeeds = require('./perfectIntervalSeeds.json')
const majorIntervalSeeds = require('./majorIntervalSeeds.json')
const minorIntervalSeeds = require('./minorIntervalSeeds.json')

const majorModeSeeds = require('./majorModeSeeds.json')
const pentatonicSeeds = require('./pentatonicSeeds.json')
const otherScaleSeeds = require('./otherScaleSeeds.json')

const triadSeeds = require('./triadSeeds.json')
const susChordSeeds = require('./susChordSeeds.json')
const sixthChordSeeds = require('./sixthChordSeeds.json')
const seventhChordSeeds = require('./seventhChordSeeds.json')

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeeds);

        await Clef.deleteMany({});
        await Clef.create(clefSeeds);

        await Accidental.deleteMany({});
        await Accidental.create(accidentalSeeds);

        await KeySignature.deleteMany({});
        await KeySignature.create(keySigSeeds);

        await Rhythm.deleteMany({});
        await Rhythm.create(rhythmSeeds);

        await Rest.deleteMany({});
        await Rest.create(restSeeds);

        await Triplet.deleteMany({});
        await Triplet.create(tripletSeeds);

        await RhythmAddition.deleteMany({});
        await RhythmAddition.create(rhythmAdditionSeeds);

        await PerfectInterval.deleteMany({});
        await PerfectInterval.create(perfectIntervalSeeds);

        await MajorInterval.deleteMany({});
        await MajorInterval.create(majorIntervalSeeds);

        await MinorInterval.deleteMany({});
        await MinorInterval.create(minorIntervalSeeds);

        await MajorMode.deleteMany({});
        await MajorMode.create(majorModeSeeds);

        await Pentatonic.deleteMany({});
        await Pentatonic.create(pentatonicSeeds);

        await OtherScale.deleteMany({});
        await OtherScale.create(otherScaleSeeds);

        await Triad.deleteMany({});
        await Triad.create(triadSeeds);

        await SusChord.deleteMany({});
        await SusChord.create(susChordSeeds);

        await SixthChord.deleteMany({});
        await SixthChord.create(sixthChordSeeds);

        await SeventhChord.deleteMany({});
        await SeventhChord.create(seventhChordSeeds);

        console.log('Data successfully uploaded!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
