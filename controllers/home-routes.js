const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req,res) => {
    console.log("Hey there");
    console.log(req.session);
    Post.findAll({
        //query config
        attributes: ['id', 'title', 'body', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login in (.../login)
router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.history.back();
        return;
    }
    res.render('login');
});

//sign up page (.../signup)
router.get('/signup', (req,res) => {
    if (req.session.loggedIn) {
        res.history.back();
        return;
    }
    res.render('signup');
});


module.exports = router;