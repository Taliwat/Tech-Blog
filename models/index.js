//bring in the main 3 (user, post, comment) for usage here in the index.
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

//write ownership objects for each model
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};