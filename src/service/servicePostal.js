const axios = require('axios');

async function postalCode(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (response.data) {
            const street = response.data.logradouro;
            const neighborhood = response.data.bairro;
            const city = response.data.localidade;
            const state = response.data.uf;
            
            return { street, neighborhood, city, state };

        } else {
            throw new Error('Postal_code not found');
        }
    } catch (error) {
        throw new Error('Error solicitation process');
    }
}

module.exports = { postalCode };