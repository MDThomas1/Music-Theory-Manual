const { Schema, model } = require('mongoose');

const rhythmSchema = new Schema({
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

const Rhythm = model('Rhythm', rhythmSchema)

module.exports = Rhythm 
