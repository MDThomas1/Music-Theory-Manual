const { Schema, model } = require('mongoose');

const tripletSchema = new Schema({
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

const Triplet = model('Rhythm', tripletSchema)

module.exports = Triplet