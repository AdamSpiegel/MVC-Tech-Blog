const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// A single blogpost belongs to the user
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

//A single blogpost contains many comments 
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// A comment belongs to a single user
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// A blogpost belongs to a single user
Post.belongsTo(User, {
    foreignKey: 'userId',
});

// A single user has many blogposts
User.hasMany (Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};