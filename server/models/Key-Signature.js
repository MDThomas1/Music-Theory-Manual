const { Schema, model } = require('mongoose');

const keySigSchema = new Schema({
    
})

const KeySignature = model('KeySignature', keySigSchema)

module.exports = KeySignature