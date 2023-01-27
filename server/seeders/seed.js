const db = require('../config/connection');

const { 
  User, 
  Chord, 
  Interval, 
  KeySignature, 
  Rhythm, Scale, 
  TimeSignature 
} = require('../models');

const userSeeds = require('./userSeeds.json');

const chordSeeds = require('./chordSeeds.json');
const intervalSeeds = require('./intervalSeeds.json');
const keySigSeeds = require('./keySigSeeds.json');
const rhythmSeeds = require('./rhythmSeeds.json');
const scaleSeeds = require('./scaleSeeds.json')
const timeSigSeeds = require('./timeSigSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    await Chord.deleteMany({})
    await Chord.create(chordSeeds)

    await Interval.deleteMany({})
    await Interval.create(intervalSeeds)

    await KeySignature.deleteMany({})
    await KeySignature.create(keySigSeeds)

    await Rhythm.deleteMany({})
    await Rhythm.create(rhythmSeeds)

    await Scale.deleteMany({})
    await Scale.create(scaleSeeds)

    await TimeSignature.deleteMany({})
    await TimeSignature.create(timeSigSeeds)

    console.log('Data successfully uploaded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
