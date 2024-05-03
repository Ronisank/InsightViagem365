const Destination = require('../models/destinations');

class DestinationsController {
    async register(req, res) {
        try {
            const { destination_name, description, locality, latitude, longitude } = req.body;

            const destination = await Destination.create({ destination_name, description, locality, latitude, longitude });
            res.status(201).json(destination);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};
module.exports = new DestinationsController();
