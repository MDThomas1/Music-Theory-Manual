const { Schema, model } = require('mongoose');

const clefSchema = new Schema({
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

const Clef = model('Clef', clefSchema)

module.exports = Clef