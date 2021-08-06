const seedWorkoutTypes = require('./WorkoutType-seeds');
///const seedUsers = require('./User-seeds');
///const seedLoggedWorkouts = require('./LoggedWorkouts-seeds');
//const seedProductTags = require('./product-LoggedWorkouts-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedWorkoutTypes();
  console.log('\n----- WORKOUTTYPE SEEDED -----\n');

 // await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

 // await seedLoggedWorkouts();
  console.log('\n----- LOGGEDWORKOUTS SEEDED -----\n');

 // await seedProductTags();
  //console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();