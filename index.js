db.createCollection("users");
db.createCollection("posts");

db.posts.insertOne([
  {
    title: "Title post",
    body: "Body post",
    username: "Federico",
    comments: { username: "Miguel", body: "Body comment" },
  },
]);

db.posts.insertMany([
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Daniel", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Sergio", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Alex", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Matias", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Daniela", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Sif", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Diego", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "German", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Sofia", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Elisa", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Rocio", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Eustaquio", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Euralio", body: "Body comment" },
  },
  {
    title: "Title post",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    username: "Federico",
    comments: { username: "Ricardo", body: "Body comment" },
  },
]);

db.users.insertMany([
  { username: "Federico", email: "federico@gmail.com", age: 34 },
  { username: "Sofia", email: "sofia@gmail.com", age: 23 },
  { username: "Alex", email: "alex@gmail.com", age: 26 },
  { username: "Matias", email: "matias@gmail.com", age: 40 },
  { username: "Daniela", email: "daniela@gmail.com", age: 27 },
  { username: "Sif", email: "sif@gmail.com", age: 18 },
  { username: "Miguel", email: "miguel@gmail.com", age: 32 },
  { username: "Daniela", email: "daniela@gmail.com", age: 20 },
  { username: "Diego", email: "diego@gmail.com", age: 33 },
  { username: "German", email: "german@gmail.com", age: 21 },
]);

db.posts.updateOne(
  { username: "Federico" },
  {
    $set: {
      title: "Title post updated",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Updated!",
      username: "Federico Updated",
      comments: { username: "Miguel Updated", body: "Body comment Updated" },
    },
  }
);

db.posts.updateOne(
  { username: "Federico" },
  {
    $set: {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Body Updated!",
    },
  }
);

db.posts.updateOne(
  { username: "Federico" },
  {
    $set: {
      comments: { body: "Comment of post super Updated" },
    },
  }
);

db.users.updateOne(
  { username: "Sofia" },
  {
    $set: {
      username: "Euralio",
      email: "euralio@gmail.com",
      age: "95",
    },
  }
);

db.users.updateOne(
  { username: "Miguel" },
  {
    $set: {
      email: "miguel_updated@gmail.com",
    },
  }
);

db.users.updateOne(
  { username: "Daniela" },
  {
    $set: {
      email: "daniel_updated@gmail.com",
    },
  }
);

db.users.updateOne(
  { username: "Diego" },
  {
    $inc: {
      age: 5,
    },
  }
);

db.posts.find();

db.posts.find({
  username: "Euralio",
});

db.users.find({ age: { $gt: 20 } });

db.users.find({ age: { $lt: 23 } });

db.users.find({ $and: [{ age: { $gt: 25 } }, { age: { $lt: 30 } }] });

db.users.find().sort({ age: 1 });
db.users.find().sort({ age: -1 });

db.users.count();

db.posts.find().forEach((doc) => {
  print("Titulo de la publicación: " + doc.title);
});

db.users.find({ $or: [{ username: "Sofia" }, { username: "German" }] });

db.posts.find({
  title: "Title post",
});

db.posts.find({
  title: "Title post updated",
});

db.users.deleteMany({ age: { $gt: 30 } });

db.posts.find().limit(1).sort({ _id: -1 });

db.posts.find().limit(5).sort({ _id: -1 });


