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


db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeeds);

        await Clef.deleteMany({});
        await Clef.create();

        await Accidental.deleteMany({});
        await Accidental.create();

        await KeySignature.deleteMany({});
        await KeySignature.create();

        await Rhythm.deleteMany({});
        await Rhythm.create(rhythmSeeds);

        await Rest.deleteMany({});
        await Rest.create();

        await Triplet.deleteMany({});
        await Triplet.create();

        await PerfectInterval.deleteMany({});
        await PerfectInterval.create();

        await MajorInterval.deleteMany({});
        await MajorInterval.create();

        await MinorInterval.deleteMany({});
        await MinorInterval.create();

        await MajorMode.deleteMany({});
        await MajorMode.create();

        await Pentatonic.deleteMany({});
        await Pentatonic.create();

        await OtherScale.deleteMany({});
        await OtherScale.create();

        await Triad.deleteMany({});
        await Triad.create();

        await SusChord.deleteMany({});
        await SusChord.create();

        await SixthChord.deleteMany({});
        await SixthChord.create();

        await SeventhChord.deleteMany({});
        await SeventhChord.create();

        console.log('Data successfully uploaded!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
