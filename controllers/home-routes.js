const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req,res) => {
    console.log("Hey there");
    console.log(req.session);
    res.render('homepage');
});


module.exports = router;