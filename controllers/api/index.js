const router = require('express').Router();

const userRoutes = require('./user-routes');
const loggedWorkoutRoutes = require('./logged-workout-routes');

router.use('/users', userRoutes);
router.use('/logged-workout', loggedWorkoutRoutes);

module.exports = router;
