'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        {
          Username: 'admin',
          email: "admin@nshape.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {individualHooks: true});
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
//const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

//module.exports = seedUsers;