var connect = require("./dbSetup.js");
connect(require("./settings").DEV_DB_URI);

var User = require("./models/User.js");
var LocationBlog = require("./models/LocationBlog.js");
var Position = require("./models/Position.js");

function positionCreator(lon, lat, userId, dateInFuture) {
  var posDetail = { user: userId, loc: { coordinates: [lon, lat] } }
  if (dateInFuture) {
    posDetail.created = "2022-09-25T20:40:21.899Z"
  }
  return posDetail;
}
async function makeUsers() {
  console.log("Making users")
  try {
    var users = [
      {
        userName: "u1",
        firstName: "aaa",
        lastName: "bbb",
        password: "secret",
        email: "a@b.dk",
        job: [
          { type: "A type", company: "comp", companyUrl: "comp.url" },
          { type: "xxx", company: "comp34", companyUrl: "comp.url.dd" }
        ]
      },
      {
        userName: "u2",
        firstName: "a1",
        lastName: "b1",
        password: "secret",
        email: "b@b.dk",
        job: [
          { type: "A type", company: "comp", companyUrl: "comp.url" },
          { type: "xxx", company: "comp34", companyUrl: "comp.url.dd" }
        ]
      }
    ];
    await User.deleteMany({});
    await Position.deleteMany({});
    await LocationBlog.deleteMany({})
    var users = await User.insertMany(users);
    console.log(users)
    var positions = [
      positionCreator(10, 11, users[0]._id),
      positionCreator(11, 12, users[1]._id, true),
    ]
    var pos = await Position.insertMany(positions)
    console.log(pos);
 
    var blogs = [
      {info:"Cool Place",pos:{longitude:26,latitude:57},author: users[0]._id},
      {info:"Another Cool Place",pos:{longitude:26,latitude:57},author: users[0]._id},
      {info:"Coolest Place",pos:{longitude:26,latitude:57},author: users[0]._id},
    ]

    var blogs = await LocationBlog.insertMany(blogs);
    //Check the virtuals
  console.log("Slug for a Cool Place", blogs[0].slug);
 
  //Add a few likes for "a Cool Place"
  blogs[0].likedBy.push(users[1]); //Like by Hanne
  blogs[0].likedBy.push(users[1]); //Like by Janne
  console.log("Likes for a Cool Place", blogs[0].likedByCount);
    
    

  } catch (err) {
    console.log(err);
  }
}
makeUsers();
