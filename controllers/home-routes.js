const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    console.log('======================');
    
    if (req.session.loggedIn) {
        res.render('homepage-loggedin');
    }
    else{
        res.render('login');
    }
});

router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;