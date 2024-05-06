const Destination = require('../models/destinations');
const { destiny } = require('../service/serviceMap');


class DestinationsController {
    async register(req, res) {
        try {
            const destination_name = req.body.destination_name;
            const description = req.body.description;
            const postal_code = req.body.postal_code;
            const locality = req.body.locality;

            if (!postal_code) {
                res.status(400).json({ error: 'CEP não informado' });
            }
            const { lat, lon } = await destiny(postal_code);
            
            const latitude = lat;
            const longitude = lon;

            const destination = await Destination.create({
                  destination_name, description, postal_code, locality, latitude, longitude });
            res.status(201).json(destination);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = new DestinationsController();
