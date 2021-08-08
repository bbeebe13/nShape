'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('WorkoutTypes', [
      {
      WorkoutTypeName: 'Fat Loss'
    },
    {
    WorkoutTypeName: 'Strength Gain'
  },
  {
    WorkoutTypeName: 'Tone'
  },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WorkoutTypes', null, {});
  }
};