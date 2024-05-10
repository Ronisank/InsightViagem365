const axios = require('axios');

async function postalCode(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (response.data) {
            
            const { logradouro, bairro, localidade, uf } = response.data;
            
            return { logradouro, bairro, localidade, uf };

        } else {
            throw new Error('Postal_code not found');
        }
    } catch (error) {
        throw new Error('Error solicitation process');
    }
}

module.exports = { postalCode };