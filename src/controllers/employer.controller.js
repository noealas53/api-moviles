const employerModel = require('../models/user.model');

// Create users

exports.createEmployer = async (req, res) => {
    const { body } = req;

    try {
        
        const newEmployer = new employerModel(body);
        await newEmployer.save();

        return res.status(201).json(newUser);

    } catch (error) {
        
        return res.status(400).send(error);

    }
}

// Search user by id

exports.getById = async (req, res) => {
    const { params } = req;

    try {
        
        const user = await employerModel.findOne({ _id: params.id });

        return res.status( user ? 200 : 404 ).json(user);

    } catch (error) {

        return res.status(400).send(error);
        
    }
}

// Find all users

exports.getAllUser = async (req, res) => {

    const user = await employerModel.find();

    return res.status(200).json(user);

}