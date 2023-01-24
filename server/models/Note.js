const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    body: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Note = model('Note', noteSchema)

module.exports = Note