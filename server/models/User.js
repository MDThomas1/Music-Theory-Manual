const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const goalSchema = new Schema({
    body: {
        type: String,
        required: true,
        trim: true
    }
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: []
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    goals: [goalSchema]
})

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema)

module.exports = User
  