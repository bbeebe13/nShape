const router = require("express").Router();
const LoggedWorkouts = require("../../models/loggedworkouts");

// get all posts
router.get("/", async (req, res) => {
  // find all posts
  try {
    const allData = await LoggedWorkouts.findAll({
        user_id: req.session.user_id,
        Workout_id: req.body.workoutType});
    res.json(allData);
  } catch (err) {
    res.status(500).json(err, "WRONG AT END POINT");
  }
});

router.get("/count", async (req, res) =>{
    try {
        const number = await LoggedWorkouts.count({
            user_id: req.session.user_id,
            Workout_id: req.body.workoutType
        });
        res.json(number);
    } catch (err) {
        res.status(500).json(err, "WRONG AT END POINT");
      }
})

// route to create a post
router.post("/", async (req, res) => {
  try {
    const postData = await LoggedWorkouts.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;