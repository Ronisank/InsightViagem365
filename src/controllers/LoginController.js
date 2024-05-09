const User = require('../models/User');
const {sign} = require('jsonwebtoken');


class LoginController {

    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            if (!email || !password) {
                return res.status(400).send({ message: 'Email and password are required' });
            }
            const user = await User.findOne({
                where: { email: email, password: password }
            })

            if (!user) {
                return res.status(401).send({ message: 'Invalid credentials' });
            }

            const payload = { user_id: user.id, email: user.email };

            const token = sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });

            return res.status(200).send({ Token: token });

        } catch (error) {
            return res.status(500).send({ message: 'Internal server error' });
        }
    }
}

module.exports = new LoginController();