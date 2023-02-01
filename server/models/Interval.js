const { Schema, model } = require('mongoose');

const intervalSchema = new Schema({
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
    referenceSong: {
        type: String,
        required: true
    },
    subsection: {
        type: String,
        required: true
    }
})

const Interval = model('Interval', intervalSchema)

module.exports = Interval