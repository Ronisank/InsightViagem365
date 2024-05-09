const User = require('../models/User');
const Destination = require('../models/destinations');
const { destiny } = require('../service/serviceMap');
const { postalCode } = require('../service/servicePostal');



class DestinationsController {
    async listAll(req, res) {
        try {
            const id = req.user_id;

            const destinations = await Destination.findAll({ where: { user_id: id } });
            res.status(200).json(destinations);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async listOne(req, res) {
        try {
            const user_id = req.user_id;
            const destination_id = req.params.id;

            const destinations = await Destination.findOne({
                where: { id: destination_id, user_id: user_id }
            });

            if (!destinations) {
                return res.status(404).json({ error: 'Destination not found' });
            }
            res.status(200).json(destinations);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async register(req, res) {
        try {
            const id = req.user_id;

            const user = await User.findByPk(id);

            if (id !== user.id) {
                return res.status(401).json({ error: 'Unauthorized user' });
            }

            const description = req.body.description;
            const postal_code = req.body.postal_code;

            if (!postal_code) {
                return res.status(400).json({ error: 'Postal code not informed' });
            }
            const { logradouro, bairro, localidade, uf } = await postalCode(postal_code);
            //const {  } = await postalCode(postal_code);
            const { lat, lon } = await destiny(logradouro);

            const destination_name = logradouro + ', ' + bairro;
            const locality = localidade + ', ' + uf;
            const latitude = lat;
            const longitude = lon;
            const user_id = id;

            const destination = await Destination.create({
                destination_name, description, postal_code, locality, latitude, longitude, user_id
            });
            res.status(201).json(destination);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const user_id = req.user_id;
            const destination_id = req.params.id;

            const destinations = await Destination.findOne({
                where: { id: destination_id, user_id: user_id }
            });
            if (!destinations) {
                return res.status(404).json({ error: 'Destination not found' });
            }

            const description = req.body.description;
            const postal_code = req.body.postal_code;
            const locality = req.body.locality;

            const { logradouro, bairro, localidade, uf } = await postalCode(postal_code);
            const { lat, lon } = await destiny(logradouro);

            if (!postal_code) {
                return res.status(400).json({ error: 'Postal code not informed' });
            }
            const destination_name = logradouro + ', ' + bairro;
            const latitude = lat;
            const longitude = lon;

            await destinations.update({
                destination_name, description, postal_code, locality, latitude, longitude, user_id
            }, {
                where: { id: destination_id, user_id: user_id }
            });

            await destinations.save();

            res.status(200).json({ message: 'Destination updated', destination: destinations });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const destination_id = req.params.id;
            const user_id = req.user_id;

            const destinations = await Destination.findOne({
                where: { id: destination_id, user_id: user_id }
            });
            if (!destinations) {
                return res.status(404).json({ error: 'Destination not found' });
            }
            await Destination.destroy({ where: { id: destination_id } });

            res.status(200).json({ message: 'Destination deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = new DestinationsController();
