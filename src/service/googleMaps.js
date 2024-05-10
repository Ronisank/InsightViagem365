async function maps(lat, lon) {
    try {
        const response = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        if (!response) {
            throw new Error('Coordinates not found');
        }
        return response;
    } catch (error) {
        throw new Error('Error in the request to the API');
    }
}

module.exports = { maps };