const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    body: {
        type: String,
        required: true,
        trim: true
    }
})

const Note = model('Note', noteSchema)

module.exports = Note