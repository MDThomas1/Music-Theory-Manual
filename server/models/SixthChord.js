const { Schema, model } = require('mongoose');

const sixthChordSchema = new Schema({
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

const SixthChord = model('SixthCord', sixthChordSchema)

module.exports = SixthChord