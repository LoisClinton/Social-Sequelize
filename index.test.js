const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });

    await User.bulkCreate([
      {
        username: "john_doe",
        email: "john_doe@example.com",
      },
      {
        username: "jane_doe",
        email: "jane_doe@example.com",
      },
      {
        username: "bob_smith",
        email: "bob_smith@example.com",
      },
      {
        username: "alice_wonderland",
        email: "alice_wonderland@example.com",
      },
      {
        username: "tom_jones",
        email: "tom_jones@example.com",
      },
    ]);

    await Comment.bulkCreate([
      {
        body: "This is a great post!",
        createdAt: "2022-01-01T12:00:00Z",
      },
      {
        body: "I completely agree with you.",
        createdAt: "2022-01-02T08:30:00Z",
      },
      {
        body: "Can you explain this point further?",
        createdAt: "2022-01-02T10:45:00Z",
      },
      {
        body: "Thanks for sharing your thoughts.",
        createdAt: "2022-01-03T15:20:00Z",
      },
      {
        body: "I have a different opinion on this topic.",
        createdAt: "2022-01-04T09:10:00Z",
      },
    ]);

    await Like.bulkCreate([
      {
        reactionType: "👍",
        createdAt: "2022-03-20T10:00:00Z",
      },
      {
        reactionType: "❤️",
        createdAt: "2022-03-21T12:30:00Z",
      },
      {
        reactionType: "😂",
        createdAt: "2022-03-22T15:45:00Z",
      },
      {
        reactionType: "🤔",
        createdAt: "2022-03-23T18:10:00Z",
      },
      {
        reactionType: "👎",
        createdAt: "2022-03-24T20:20:00Z",
      },
    ]);
    await Post.bulkCreate([
      {
        title: "Hiking in Yosemite",
        body: "I had an amazing time hiking in Yosemite National Park!",
        createdAt: "2022-03-15T10:30:00.000Z",
      },
      {
        title: "London Street Photography",
        body: "Here are some of my recent street photography shots from London.",
        createdAt: "2022-03-18T14:15:00.000Z",
      },
      {
        title: "New JavaScript Framework",
        body: "I'm excited to announce the release of our new JavaScript framework!",
        createdAt: "2022-03-21T09:00:00.000Z",
      },
      {
        title: "Harvard Yard in the Spring",
        body: "Spring is finally here! Here's a shot of Harvard Yard.",
        createdAt: "2022-03-25T11:45:00.000Z",
      },
      {
        title: "New Song Release",
        body: "Check out my latest song on Spotify!",
        createdAt: "2022-03-27T16:20:00.000Z",
      },
    ]);
    await Profile.bulkCreate([
      {
        bio: "I'm a software engineer",
        profilePicture: "https://example.com/profile1.jpg",
        birthday: "1990-06-15",
      },
      {
        bio: "I love to travel",
        profilePicture: "https://example.com/profile2.jpg",
        birthday: "1985-09-28",
      },
      {
        bio: "I'm a foodie",
        profilePicture: "https://example.com/profile3.jpg",
        birthday: "1992-01-10",
      },
      {
        bio: "I'm a fitness enthusiast",
        profilePicture: "https://example.com/profile4.jpg",
        birthday: "1988-11-22",
      },
      {
        bio: "I'm a musician",
        profilePicture: "https://example.com/profile5.jpg",
        birthday: "1995-03-01",
      },
    ]);
  });

  // Write your tests here

  // Write unit tests to ensure that the connection works and the associations are set up correctly.

  // Seed data has been created in the seed directory. Feel free to use this in your test creation!

  test("can create a User", async () => {
    const testUser = await User.findByPk(1);
    expect(testUser).toBeInstanceOf(User);
  });

  test("can create a User", async () => {
    const testUser = await User.findByPk(1);
    expect(testUser.username).toBe("john_doe");
  });

  test("can create a Profile", async () => {
    const testProfile = await Profile.findByPk(1);
    expect(testProfile).toBeInstanceOf(Profile);
  });

  test("can create a Profile", async () => {
    const testProfile = await Profile.findByPk(1);
    expect(testProfile.bio).toBe("I'm a software engineer");
  });

  test("can create a Post", async () => {
    const testPost = await Post.findByPk(1);
    expect(testPost).toBeInstanceOf(Post);
  });

  test("can create a Post", async () => {
    const testPost = await Post.findByPk(1);
    expect(testPost.body).toBe(
      "I had an amazing time hiking in Yosemite National Park!"
    );
  });

  test("can create a Like", async () => {
    const testLike = await Like.findByPk(1);
    expect(testLike).toBeInstanceOf(Like);
  });

  test("can create a Like", async () => {
    const testLike = await Like.findByPk(1);
    expect(testLike.reactionType).toBe("👍");
  });

  test("can create a Comment", async () => {
    const testComment = await Comment.findByPk(1);
    expect(testComment).toBeInstanceOf(Comment);
  });

  test("can create a Comment", async () => {
    const testComment = await Comment.findByPk(1);
    expect(testComment.body).toBe("This is a great post!");
  });

  //ASSOCIATION TESTS

  //MANY TO MANY TEMPLATE

  // A User can have many Like instances and vice versa.
  //   User.belongsToMany(Like, { through: "User-Like" });
  //   Like.belongsToMany(User, { through: "User-Like" });

  test("User and Like are associated through a many to many relationship", async () => {
    expect().toBe();
  });

  //   ONE TO MANY

  // A User can have many Post instances, but a Post can only have one User.
  // User.hasMany(Post);
  // Post.belongsTo(User);
  test("User and Post are associated through a one to many relationship", async () => {
    expect().toBe();
  });

  // A Post can have many Comment instances, but a Comment can only have one Post.
  // Post.hasMany(Comment);
  // Comment.belongsTo(Post);
  test("Post and Comment are associated through a one to many relationship", async () => {
    expect().toBe();
  });

  //   ONE TO ONE

  // A User can have one Profile and vice versa.
  // User.hasOne(Profile);
  // Profile.belongsTo(User);

  test("User and Profile are associated through a one to one relationship", async () => {
    expect().toBe();
  });
});
