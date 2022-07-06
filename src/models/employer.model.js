const { Schema, model } = require('mongoose');

// Esquema del empleado
const employerSchema = new Schema({
    name: {
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
    placa: {
        type: String,
        required: true,
    }
});

module.exports = model('employer', employerSchema);