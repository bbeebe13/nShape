const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

router.get('dashboard'), (req, res) => [
  res.render('dashboard.css', {
    style: 'LoggedIn.css'
  })
]

router.get('homepage-loggedin'), (req, res) => [
  res.render('homepage-loggedin', {
    style: 'LoggedIn.css'
  })
]


router.get('login'), (req, res) => [
  res.render('Login', {
    style: 'LoggedPage.css'
  })
]

router.get('login'), (req, res) => [
  res.render('Login', {
    style: 'LoggedPage.css'
  })
]

const helpers = require('./utils/helpers');
const router = require('./controllers/api/user-routes');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

