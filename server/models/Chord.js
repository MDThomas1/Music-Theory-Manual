const { Schema, model } = require('mongoose');

const chordSchema = new Schema({
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
    },
    subsection: {
        type: String,
        required: true
    }
})

const Chord = model('Chord', chordSchema)

module.exports = Chord