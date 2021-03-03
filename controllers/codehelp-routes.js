const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const auth = require('../utils/auth');

router.get('/', (req, res) => {
    console.log("Hey there");
    console.log(req.session);
    Post.findAll({
        //query config
        attributes: ['id', 'title', 'body', 'code_help', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username', 'id']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: [
                    {
                        model: User,
                        attributes: ['username', 'id']
                    }
                ]
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            console.log("=======================");
            const sortedPosts = posts.map(post => {
                if (post.code_help === true) {
                    return post;
                } 
            })
            const filteredPosts = sortedPosts.filter(posts => {
                return posts != null
            });
            console.log(filteredPosts);
            res.render('codehelp', { filteredPosts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;