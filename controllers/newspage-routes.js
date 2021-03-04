const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()

//load homepage and call api
router.get('/', (req,res) => {
    axios.get(`https://newsapi.org/v2/everything?q=software&apiKey=${process.env.API_KEY}`)
    .then(newsData => {
        const newsArticleData = newsData.data.articles;
        res.render('newspage',{ newsData: newsArticleData, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;