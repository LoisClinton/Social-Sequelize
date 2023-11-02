const { Comment } = require("./Comment");
const { Like } = require("./Like");
const { Post } = require("./Post");
const { Profile } = require("./Profile");
const { User } = require("./User");

// A User can have one Profile and vice versa.
User.hasOne(Profile);
Profile.belongsTo(User);

// A User can have many Post instances, but a Post can only have one User.
User.hasMany(Post);
Post.belongsTo(User);

// A Post can have many Comment instances, but a Comment can only have one Post.
Post.hasMany(Comment);
Comment.belongsTo(Post);

// A User can have many Like instances and vice versa.
User.belongsToMany(Like, { through: "User-Like" });
Like.belongsToMany(User, { through: "User-Like" });

module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
