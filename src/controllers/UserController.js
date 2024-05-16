const User = require('../models/User');
const { postalCode } = require('../service/servicePostal');

class UserController {
    async register(req, res) {
        try {
            const { name, email, password, cpf, date_of_birth, gender } = req.body;
            
            const postal_code = req.body.postal_code.replace(/[^0-9]/g, "");

            if (!postal_code) {
                res.status(400).json({ error: 'Postal code not informed' });
            }
            if (postal_code.length < 8 || postal_code.length > 8) {
                return res.status(400).json({ error: 'Postal code must have 8 characters' });
            }

            const { street, neighborhood, city, state } = await postalCode(postal_code);

            const address = `${street}, ${neighborhood}, ${city}, ${state}`;

            if (!street || !neighborhood || !city || !state) {
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
