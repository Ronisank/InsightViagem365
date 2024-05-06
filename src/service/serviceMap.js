const axios = require('axios');

async function destiny(cep) {
    try {

        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil&limit=1`);

        if (response.data && response.data.length > 0) {

            const { lat, lon } = response.data[0];

            console.log("da função " + lat, lon)
            return { lat, lon };

        } else {
            throw new Error('CEP não encontrado');
        }
    } catch (error) {
        console.error('Erro ao consultar o CEP:', error);
        throw new Error('Erro ao processar a solicitação');
    }
}
module.exports = { destiny };