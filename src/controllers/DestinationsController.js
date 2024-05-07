const Destination = require('../models/destinations');
const { destiny } = require('../service/serviceMap');
const { postalCode } = require('../service/servicePostal');


class DestinationsController {
    async listAll(req, res) {
        try {
            const destinations = await Destination.findAll();
            res.status(200).json(destinations);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async listOne(req, res) {
        try {
            const id = req.params.id;
            const destination = await Destination.findByPk(id);
            if (!destination) {
                res.status(404).json({ error: 'Destination not found' });
            }
            res.status(200).json(destination);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async register(req, res) {
        try {
            const description = req.body.description;
            const postal_code = req.body.postal_code;

            if (!postal_code) {
                res.status(400).json({ error: 'Postal code not informed' });
            }
            const { logradouro, bairro } = await postalCode(postal_code);
            const { localidade, uf } = await postalCode(postal_code);
            const { lat, lon } = await destiny(logradouro);

            const destination_name = logradouro + ', ' + bairro;
            const locality = localidade + ', ' + uf;
            const latitude = lat;
            const longitude = lon;

            const destination = await Destination.create({
                destination_name, description, postal_code, locality, latitude, longitude
            });
            res.status(201).json(destination);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const id = req.params.id;
            const destination_name = req.body.destination_name;
            const description = req.body.description;
            const postal_code = req.body.postal_code;
            const locality = req.body.locality;
            const { lat, lon } = await destiny(
                !postal_code ? res.status(400).json({ error: 'Postal code not informed' }) : postal_code);
            const latitude = lat;
            const longitude = lon;
            const destination = await Destination.update({
                destination_name, description, postal_code, locality, latitude, longitude
            },
                { where: { id: id } });
            if (destination[0] === 0) {
                res.status(404).json({ error: 'Destination not found' });
            }
            res.status(200).json({ message: 'Destination updated' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const id = req.params.id;
            const destination = await Destination.destroy({ where: { id: id } });
            if (!destination) {
                res.status(404).json({ error: 'Destination not found' });
            }
            res.status(200).json({ message: 'Destination deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = new DestinationsController();
