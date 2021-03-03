//include dependencies 
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const exphbs = require('express-handlebars');
//put helpers inside the create if we use them
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//cookies
const sess = {
    secret: process.env.DB_SECRET,
    cookie: { maxAge: 150000 },
    resave: false,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


// set up middleware

//use cookie session
app.use(session(sess));
//use handlebars
app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
//format with json
app.use(express.json());
//sort nested variables
app.use(express.urlencoded({ extended: true }));
//make public folder available for use
app.use(express.static(path.join(__dirname, 'public')));
//turn on routes
app.use(routes);


//turn on connection to server and sync with sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
