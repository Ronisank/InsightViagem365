const axios = require('axios');

async function destiny(street, city) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&street=${street}&city${city}&country=Brazil&limit=2`);
        
        if (!response.data) {
            return
        }
        if (response.data && response.data.length > 0) {

            const { lat, lon } = response.data[0];

            return { lat, lon };

        } else {            
            throw new Error('CEP not found');
        }
    } catch (error) {
        throw new Error('Error in the request to the API');
    }
}
module.exports = { destiny };