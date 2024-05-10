const User = require('../models/User');
const { postalCode } = require('../service/servicePostal');

class UserController {
    async register(req, res) {
        try {
            const { name, email, password, cpf, date_of_birth, gender } = req.body;
            const postal_code = req.body.postal_code;

            if (!postal_code) {
                res.status(400).json({ error: 'Postal code not informed' });
            }

            const { logradouro, bairro, localidade, uf } = await postalCode(postal_code);
            const address = logradouro + ',' + bairro + ',' + localidade + ',' + uf;

            if (!address || !undefined) {
                return res.status(400).json({ error: 'Address not found' });
            }
            const user = await User.create({
                name, email, password, cpf, date_of_birth, gender, postal_code, address
            });
            res.status(201).json(user);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
}

module.exports = new UserController();
