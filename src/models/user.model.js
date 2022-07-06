const { Schema, model } = require('mongoose');

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
    }
});

module.exports = model('user', userSchema);