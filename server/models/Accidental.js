const { Schema, model } = require('mongoose');

const accidentalSchema = new Schema({
    name: {
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

const Accidental = model('Accidental', accidentalSchema)

module.exports = Accidental