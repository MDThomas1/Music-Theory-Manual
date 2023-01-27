const { Schema, model } = require('mongoose');

const timeSigSchema = new Schema({

})

const TimeSignature = model('TimeSignature', timeSigSchema)

module.exports = TimeSignature
