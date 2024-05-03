const User = require('../models/User');

class UserController {

    async listAll(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }

    async register(req, res) {
        try {
            const { name, email, password, cpf, date_of_birth, gender, adress } = req.body;
            console.log(req.body);
            const user = await User.create({
                name: name,
                email: email,
                password: password,
                cpf: cpf,
                date_of_birth: date_of_birth,
                gender: gender,
                adress: adress
            });
            console.log(user);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
}

module.exports = new UserController();
