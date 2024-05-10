'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
        password: '123456',
        cpf: 12345678911,
        date_of_birth: '1990-01-01',
        gender: 'Male',
        postal_code: '88085480',
        address: 'Rua Bias Peixoto, Abraão, Florianópolis, SC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Mary Doe',
        email: 'mary@email.com',
        password: '123456',
        cpf: 12345678912,
        date_of_birth: '1999-12-01',
        gender: 'Female',
        postal_code: '88085580',
        address: 'Rua Alberto Beck, Itaguaçu, Florianópolis, SC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Peter Doe',
        email: 'peter@email.com',
        password: '123456',
        cpf: '12345678913',
        date_of_birth: '1995-06-01',
        gender: 'Masculino',
        postal_code: '25640040',
        address: 'Praça Pasteur, Castelanea, Petrópolis, RJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: '123456',
        cpf: '12345678914',
        date_of_birth: '2000-01-01',
        gender: 'Feminino',
        postal_code: '25645010',
        address: 'Rua Doutor Henrique Castrioto, Castelanea, Petrópolis, RJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Alice Doe',
        email: 'alice@email.com',
        password: '123456',
        cpf: '12345678915',
        date_of_birth: '1993-01-01',
        gender: 'Other',
        postal_code: '57037020',
        address: 'Avenida Almirante Álvaro Calheiros,	Mangabeiras, Maceió, AL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Bob Doe',
        email: 'bob@email.com',
        password: '123456',
        cpf: '12345678916',
        date_of_birth: '1997-01-01',
        gender: 'Outro',
        postal_code: '57010900',
        address: 'Avenida Assis Chateaubriand, Trapiche da Barra, Maceió, AL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
