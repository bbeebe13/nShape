'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        {
          Username: 'admin',
          email: "admin@nshape.com",
          password: await bcrypt.hash("password", 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {
        individualHooks: true
      });
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
//const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

//module.exports = seedUsers;