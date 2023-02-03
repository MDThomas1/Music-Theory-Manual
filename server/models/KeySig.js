const { Schema, model } = require('mongoose');

const keySigSchema = new Schema({
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

const KeySignature = model('KeySignature', keySigSchema)

module.exports = KeySignature