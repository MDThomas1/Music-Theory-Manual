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
    }
})

const Triplet = model('Triplet', tripletSchema)

module.exports = Triplet