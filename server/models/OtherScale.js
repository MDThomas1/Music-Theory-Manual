const { Schema, model } = require('mongoose');

const otherScaleSchema = new Schema({
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

const OtherScale = model('OtherScale', otherScaleSchema)

module.exports = OtherScale