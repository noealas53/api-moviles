const userModel = require('../models/user.model');

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

exports.getById = async (req, res) => {
    const { params } = req;

    try {
        
        const user = await userModel.findOne({ _id: params.id });

        return res.status( user ? 200 : 404 ).json(user);

    } catch (error) {

        return res.status(400).send(error);
        
    }
}

exports.getAllUser = async (req, res) => {
    const { query } = req;
    const { limit } = query;

    const user = await userModel.find().limit(limit);

    return res.status(200).json(user);

}