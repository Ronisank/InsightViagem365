const User = require('../models/User');
const Destination = require('../models/Destination');
const { maps } = require('../service/googleMaps');
const { destiny } = require('../service/serviceMap');
const { postalCode } = require('../service/servicePostal');



class DestinationsController {
    async listAll(req, res) {
        try {
            const id = req.user_id;

            const destinations = await Destination.findAll({ where: { user_id: id } });
            if (!destinations) {
                return res.status(404).json({ error: 'No destinations found' });
            }
            const destinationCoordinates = [];

            for (let i = 0; i < destinations.length; i++) {

                const destination = destinations[i];
                const lat = destination.latitude;
                const lon = destination.longitude;

                const response = await maps(lat, lon);

                const destinationCoordinatePair = {
                    destination: destination,
                    coordinates: response
                };
                destinationCoordinates.push(destinationCoordinatePair);
            }
            res.status(200).json({ destinationCoordinates });
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
            const coordinates = await maps(destinations.latitude, destinations.longitude);
            res.status(200).json({destinations, coordinates});
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
            const postal_code = req.body.postal_code.replace(/[^0-9]/g,"");
            

            if (!postal_code) {
                return res.status(400).json({ error: 'Postal code not informed' });
            }
            if (postal_code.length < 8 || postal_code.length > 8) {
                return res.status(400).json({ error: 'Postal code must have 8 characters' });
            }
            if(description.length < 3 ) {
                return res.status(400).json({ error: 'Description must have at least 3 characters' });
            }

            const { street, neighborhood, city, state } = await postalCode(postal_code);
            console.log(street, neighborhood, city, state);
            const { lat, lon } = await destiny(street, city);

            const destination_name = street + ', ' + neighborhood;
            const locality = city + ', ' + state;
            const latitude = lat;
            const longitude = lon;
            const user_id = id;
            const google_maps = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
   
            const destination = await Destination.create({
                destination_name, description, postal_code, locality, latitude, longitude, user_id
            });
            res.status(201).json({ destination, google_maps });
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
            const postal_code = req.body.postal_code.replace(/[^0-9]/g,"");
            console.log(postal_code);

            if (!postal_code) {
                return res.status(400).json({ error: 'Postal code not informed' });
            }
            if (postal_code.length < 8 || postal_code.length > 8) {
                return res.status(400).json({ error: 'Postal code must have 8 characters' });
            }
            if(description.length < 5 ) {
                return res.status(400).json({ error: 'Description must have at least 3 characters' });
            }

            const { street, neighborhood, city, state } = await postalCode(postal_code);
            const { lat, lon } = await destiny(street);


            const destination_name = street + ', ' + neighborhood;
            const locality = city + ', ' + state;
            const latitude = lat;
            const longitude = lon;
            const google_maps = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
            await destinations.update({
                destination_name, description, postal_code, locality, latitude, longitude, user_id
            }, {
                where: { id: destination_id, user_id: user_id }
            });

            await destinations.save();

            res.status(200).json({ message: 'Destination updated', destination: destinations, Link: google_maps });

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

            res.status(204).json({ message: 'Destination deleted' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = new DestinationsController();
