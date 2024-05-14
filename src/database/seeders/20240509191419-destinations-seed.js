'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('destinations', [
      {
        destination_name: "Avenida Pasteur, Botafogo",
        description: "Bondinho do Pão de Açucar",
        postal_code: "22290240",
        locality: "Rio de Janeiro, RJ",
        latitude: "-16.7143625",
        longitude: "-49.3028444",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua Seriema, Arpoador",
        description: "Praia do Arpoador",
        postal_code: "28956000",
        locality: "Armação dos Búzios, RJ",
        latitude: "-26.417729",
        longitude: "-48.7963745",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Estrada do Corcovado, Cosme Velho",
        description: "Cristo Redentor",
        postal_code: "22241370",
        locality: "Rio de Janeiro, RJ",
        latitude: "-22.9518779",
        longitude: "-43.2116611",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua Jornalista Assis Chateaubriand, Centro",
        description: "Parque da Luz",
        postal_code: "88010150",
        locality: "Florianópolis, SC",
        latitude: "-22.1889948",
        longitude: "-46.737725",
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Caminho da Praia, Barra da Lagoa",
        description: "Barra da Lagoa",
        postal_code: "88061233",
        locality: "Florianópolis, SC",
        latitude: "-12.570889",
        longitude: "-38.0002831",
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua Pontal do Atalaia, Praia Grande",
        description: "Mirante Pongaloa",
        postal_code: "28930000",
        locality: "Arraial do Cabo, RJ",
        latitude: "-27.598726",
        longitude: "-48.558485",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua Margarete, Ferradurinha",
        description: "Praia da Ferradurinha",
        postal_code: "28950000",
        locality: "Armação dos Búzios, RJ",
        latitude: "-22.7795449",
        longitude: "-41.9089055",
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua José Ribeiro Vasconcelos, Maragogi",
        description: "Mirante de Maragogi",
        postal_code: "57955000",
        locality: "Maragogi, AL",
        latitude: "-22.748072",
        longitude: "-41.885874",
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua dos Sabiás, Barrerinhas",
        description: "Parque das Dunas",
        postal_code: "65590000",
        locality: "Barreirinhas, MA",
        latitude: "-2.7549383",
        longitude: "-42.8168117",
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination_name: "Rua Porto Canoas, Foz do Iguaçu",
        description: "Cataratas do Iguaçu",
        postal_code: "85855750",
        locality: "Foz do Iguaçu, PR",
        latitude: "-25.6919834",
        longitude: "-54.4403308",
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('destinations', null, {});
  }
};
