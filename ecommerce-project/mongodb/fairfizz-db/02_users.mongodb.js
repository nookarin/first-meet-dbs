use("fairfizz-db");

db.users.deleteMany({});

db.users.insertMany([
  {
    _id: ObjectId("66a200000000000000000001"),
    name: "Admin FairFizz",
    email: "admin@fairfizz.com",
    hashedPassword: "$2b$10$placeholderhashedpasswordadmin",
    role: "admin",
    createdAt: new Date("2026-01-01"),
  },
  {
    _id: ObjectId("66a200000000000000000002"),
    name: "Alice Johnson",
    email: "alice@example.com",
    hashedPassword: "$2b$10$placeholderhashedpasswordalice",
    role: "customer",
    createdAt: new Date("2026-02-15"),
  },
  {
    _id: ObjectId("66a200000000000000000003"),
    name: "Bob Martinez",
    email: "bob@example.com",
    hashedPassword: "$2b$10$placeholderhashedpasswordbob",
    role: "customer",
    createdAt: new Date("2026-03-01"),
  },
  {
    _id: ObjectId("66a200000000000000000004"),
    name: "Carol Chen",
    email: "carol@example.com",
    hashedPassword: "$2b$10$placeholderhashedpasswordcarol",
    role: "customer",
    createdAt: new Date("2026-03-10"),
  },
  {
    _id: ObjectId("66a200000000000000000005"),
    name: "David Park",
    email: "david@example.com",
    hashedPassword: "$2b$10$placeholderhashedpassworddavid",
    role: "customer",
    createdAt: new Date("2026-04-05"),
  },
]);

db.users.find({});
