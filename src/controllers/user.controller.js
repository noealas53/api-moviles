const userModel = require('../models/user.model');

// Create users

exports.createUser = async (req, res) => {
    const { body } = req;

    try {
        
        const newUser = new userModel(body);
        await newUser.save();

        return res.status(201).json(newUser);

    } catch (error) {
        
        return res.status(400).send(error);

    }
}

// Search user by id

exports.getById = async (req, res) => {
    const { params } = req;

    try {
        
        const user = await userModel.findOne({ _id: params.id });

        return res.status( user ? 200 : 404 ).json(user);

    } catch (error) {

        return res.status(400).send(error);
        
    }
}

// Find all users

exports.getAllUser = async (req, res) => {

    const user = await userModel.find();

    return res.status(200).json(user);

}