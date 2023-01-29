const { Schema, model } = require('mongoose');

const timeSigSchema = new Schema({
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

const TimeSignature = model('TimeSignature', timeSigSchema)

module.exports = TimeSignature
