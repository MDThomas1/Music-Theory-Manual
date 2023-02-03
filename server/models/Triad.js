const { Schema, model } = require('mongoose');

const triadSchema = new Schema({
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

const Triad = model('Triad', triadSchema)

module.exports = Triad