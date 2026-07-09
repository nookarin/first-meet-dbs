use("fairfizz-db");

db.retailers.deleteMany({});
db.shoppingPlatforms.deleteMany({});

db.retailers.insertMany([
  {
    _id: ObjectId("66aB0000000000000000001"),
    name: "GreenMart Supermarket",
    type: "supermarket",
  },
  {
    _id: ObjectId("66aB0000000000000000002"),
    name: "Corner Quick Stop",
    type: "conveni",
  },
  {
    _id: ObjectId("66aB0000000000000000003"),
    name: "The Fizz Bar",
    type: "bar",
  },
  {
    _id: ObjectId("66aB0000000000000000004"),
    name: "Bistro Downtown",
    type: "restaurant",
  },
]);

db.shoppingPlatforms.insertMany([
  {
    _id: ObjectId("66aBp0000000000000000001"),
    name: "FairFizz Direct",
    url: "https://fairfizz.com",
  },
  {
    _id: ObjectId("66aBp0000000000000000002"),
    name: "ShopEats Market",
    url: "https://shopeats.com",
  },
]);

db.retailers.find({});
print("---");
db.shoppingPlatforms.find({});
