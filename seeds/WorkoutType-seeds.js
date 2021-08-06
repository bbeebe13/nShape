const { WorkoutType } = require('../models');

const WorkoutTypeData = [
    {
        WorkoutTypeName: 'Fat Loss',
    },
    {
        WorkoutTypeName: 'Strength Gain',
    },
    {
        WorkoutTypeName: 'Tone',
    },
    ];

const seedWorkoutTypes = () => WorkoutType.bulkCreate(WorkoutTypeData);

module.exports = seedWorkoutTypes;