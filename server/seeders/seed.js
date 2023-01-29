const db = require('../config/connection');

const { 
  User, 
  Chord, 
  Interval, 
  Rhythm, 
  Scale, 
  Symbol
} = require('../models');

const userSeeds = require('./userSeeds.json');

const chordSeeds = require('./chordSeeds.json');
const intervalSeeds = require('./intervalSeeds.json');
const rhythmSeeds = require('./rhythmSeeds.json');
const scaleSeeds = require('./scaleSeeds.json')
const symbolSeeds = require('./symbolSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    await Chord.deleteMany({})
    await Chord.create(chordSeeds)

    await Interval.deleteMany({})
    await Interval.create(intervalSeeds)

    await Rhythm.deleteMany({})
    await Rhythm.create(rhythmSeeds)

    await Scale.deleteMany({})
    await Scale.create(scaleSeeds)

    await Symbol.deleteMany({})
    await Symbol.create(symbolSeeds)

    console.log('Data successfully uploaded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
