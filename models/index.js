const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');
const Following = require('./Following');
const Followers = require('./Followers');

//user-post associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//voting-post associations 
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

//Comment associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// //following
// Following.belongsTo(User, {
//     foreignKey: "followee_id"
// });

// Following.belongsTo(User, {
//     foreignKey: "follower_id"
// });

// User.hasMany(Following, {
//     foreignKey: "followee_id"
// });

// //followers
// Followers.belongsTo(User, {
//     foreignKey: "follower_id"
// });

// Followers.belongsTo(User, {
//     foreignKey: "followee_id"
// });

// User.hasMany(Followers, {
//     foreignKey: "follower_id"
// });

module.exports = { User, Post, Vote, Comment };