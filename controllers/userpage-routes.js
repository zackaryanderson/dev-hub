const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//get all of the users posts (.../userpage/:id)
//update to user req.session.user_id
router.get('/:id', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.params.id
        },
        attributes: ['id', 'title', 'body', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']],
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('userpage',{ posts, loggedin: req.session.loggedin });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;