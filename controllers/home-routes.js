const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    console.log('======================');
    
    if (req.session.logged_in) {
        res.render('homepage-loggedin');
    }
    else{
        res.render('homepage');
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/logout', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
        console.log('LOGGED OUT')
      });
    } else {
      console.log("ERR AT LOGOUT")
    }
    res.redirect('/');
});

module.exports = router;