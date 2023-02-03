const { Schema, model } = require('mongoose');

const susChordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    structure: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const SusChord = model('SusChord', susChordSchema)

module.exports = SusChord