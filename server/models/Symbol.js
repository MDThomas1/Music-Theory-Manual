const { Schema, model } = require('mongoose');

const symbolSchema = new Schema({
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

const Symbol = model('Symbol', symbolSchema)

module.exports = Symbol