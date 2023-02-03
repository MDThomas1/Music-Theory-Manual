const { Schema, model } = require('mongoose');

const restSchema = new Schema({
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

const Rest = model('Rest', restSchema)

module.exports = Rest