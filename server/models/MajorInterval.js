const { Schema, model } = require('mongoose');

const majorIntervalSchema = new Schema({
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
    }
})

const MajorInterval = model('MajorInterval', majorIntervalSchema)

module.exports = MajorInterval