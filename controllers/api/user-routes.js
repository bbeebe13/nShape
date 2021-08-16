const router = require('express').Router();
const User  = require('../../models/user');

router.post('/', async (req, res) => {
    console.log("Signup route")
  try {

    
    const userData = await User.create(
      {
        user_name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
    );

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
    console.log("Login Route")
  try {

  
    console.log("userName: " + req.body.userName)
    console.log("userPassword: " +req.body.userPassword)

    const userData = await User.findOne({ where: { 
      Username: "admin" } });
    console.log('UserData ',userData)
    if (!userData) {
      console.log("B");
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    console.log("AB");

    const validPassword = await userData.checkPassword(req.body.userPassword);
    console.log('validPassword ',validPassword)
    if (!validPassword) {
      
    console.log("C");
      console.log("!ValidPassword")
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      console.log("D");
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log("E");
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log("START LOGOUT")
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log('LOGGED OUT')
    });
  } else {
    res.status(404).end();
    console.log("ERR AT LOGOUT")
  }
});

module.exports = router;