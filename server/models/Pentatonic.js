const { Schema, model } = require('mongoose');

const pentatonicSchema = new Schema({
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

const Pentatonic = model('Pentatonic', pentatonicSchema)

module.exports = Pentatonic