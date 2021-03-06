const employerModel = require('../models/employer.model');

// Creando empleado

exports.createEmployer = async (req, res) => {
    const { body } = req;

    try {
        
        const newEmployer = new employerModel(body);
        await newEmployer.save();

        return res.status(201).json(newEmployer);

    } catch (error) {
        
        return res.status(400).send(error);

    }
}

// Buscando empleado por id

exports.getById = async (req, res) => {
    const { params } = req;

    try {
        
        const employer = await employerModel.findOne({ _id: params.id });

        return res.status( employer ? 200 : 404 ).json(employer);

    } catch (error) {

        return res.status(400).send(error);
        
    }
}

// Obteniendo todos los empleados registrados

exports.getAllEmployer = async (req, res) => {

    const employer = await employerModel.find();

    return res.status(200).json(employer);

}