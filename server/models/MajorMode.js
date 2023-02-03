const { Schema, model } = require('mongoose');

const majorModeSchema = new Schema({
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

const MajorMode = model('MajorMode', majorModeSchema)

module.exports = MajorMode