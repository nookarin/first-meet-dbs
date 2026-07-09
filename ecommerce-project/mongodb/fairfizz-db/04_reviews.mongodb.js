use("fairfizz-db");

db.reviews.deleteMany({});

db.reviews.insertMany([
  {
    _id: ObjectId("66a400000000000000000001"),
    productId: ObjectId("66a100000000000000000001"),
    userId: ObjectId("66a200000000000000000002"),
    rating: 5,
    body: "Best cola I've ever had! The cane sugar makes all the difference.",
    createdAt: new Date("2026-03-22"),
  },
  {
    _id: ObjectId("66a400000000000000000002"),
    productId: ObjectId("66a100000000000000000005"),
    userId: ObjectId("66a200000000000000000003"),
    rating: 4,
    body: "Creamy and smooth. Tastes just like a root beer float.",
    createdAt: new Date("2026-04-02"),
  },
  {
    _id: ObjectId("66a400000000000000000003"),
    productId: ObjectId("66a10000000000000000000c"),
    userId: ObjectId("66a200000000000000000004"),
    rating: 5,
    body: "Cherry Bomb is my new favorite. The caffeine kick is perfect.",
    createdAt: new Date("2026-04-11"),
  },
  {
    _id: ObjectId("66a400000000000000000004"),
    productId: ObjectId("66a100000000000000000011"),
    userId: ObjectId("66a200000000000000000005"),
    rating: 5,
    body: "Blue Hawaii tastes just like a tropical vacation!",
    createdAt: new Date("2026-03-28"),
  },
  {
    _id: ObjectId("66a400000000000000000005"),
    productId: ObjectId("66a100000000000000000003"),
    userId: ObjectId("66a200000000000000000002"),
    rating: 3,
    body: "Good lemonade but a bit too sweet for my taste.",
    createdAt: new Date("2026-03-23"),
  },
]);

db.reviews.find({});
