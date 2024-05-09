const axios = require('axios');

async function destiny(cep) {
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&street=${cep}&country=Brazil&limit=2`);
        console.log(response.data + " RESPONSE")
        if (response.data && response.data.length > 0) {

            const { lat, lon } = response.data[0];

            console.log("DEU ERRO NA CHAMADA DA FUNÇÃO " + lat, lon)
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