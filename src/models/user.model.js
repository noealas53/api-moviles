const { Schema, model } = require('mongoose');

// Esquema del usuario
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateBirth: {
        type: String,
        required: true,
    },
    dui: {
        type: String,
        required: true,
        unique: true,
        minlength: 9,
        maxlength: 10,
    },
    sure: {
        type: Boolean,
        required: true,
    }
});

module.exports = model('user', userSchema);