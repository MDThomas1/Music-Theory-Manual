const { Schema, model } = require('mongoose');

const rhythmAdditionSchema = new Schema({
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
    }
})

const RhythmAddition = model('RhythmAddition', rhythmAdditionSchema)

module.exports = RhythmAddition