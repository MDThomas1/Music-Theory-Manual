const { Schema, model } = require('mongoose');

const seventhChordSchema = new Schema({
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

const SeventhChord = model('SeventhChord', seventhChordSchema)

module.exports = SeventhChord