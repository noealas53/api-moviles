const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

// Creacion del login

exports.login = async ( req, res ) => {

    try {
        const { dui, name } = req.body;
        const user = await userModel.findOne({ dui });

        // Validando que el dui ya este registrado
        if(!user)
            throw { status: 404, message: 'Usuario no encontrado'};

        // Validando que el nombre y el dui coincidan para generar el token
        const nameUser = name === user.name;

        if (!nameUser)
        throw { status: 404, message: 'Nombre no corresonde al dui'};

        // Construccion del token

        const payload = { _id: user._id };

        const token = jwt.sign(payload, process.env.JWT_SECRET);

        return res.status(200).json({ token });

    }
    catch (error) {
        return res.status(error.status ?? 400 ).send(error);
    }
}

// Creacion del regustro de usuario

exports.register = async ( req, res ) => {
    const { name, lastName, dateBirth, dui, sure } = req.body;
    try {

        // Validando que el dui no se encuentre registrado
        const isDui = !(await userModel.findOne({ dui }));

        if (!isDui)
            throw { status: 400, message: 'DUI ya registrado' };
        
        // Registrando el usuario
        const newUser = new userModel ({

            name,
            lastName,
            dateBirth,
            dui,
            sure

        });

        await newUser.save();

        return res.status(204).json();

    }
    catch (error) {
        return res.status(error.status ?? 400 ).send(error);
    }
}
