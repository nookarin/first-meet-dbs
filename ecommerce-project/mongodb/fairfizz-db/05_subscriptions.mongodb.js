use("fairfizz-db");

db.subscriptions.deleteMany({});

db.subscriptions.insertMany([
  {
    _id: ObjectId("66a500000000000000000001"),
    userId: ObjectId("66a200000000000000000002"),
    status: "active",
    plan: "monthly-6pack",
    nextBillingDate: new Date("2026-05-20"),
    preferences: ["Cola", "Cherry", "Ginger"],
    createdAt: new Date("2026-03-20"),
  },
  {
    _id: ObjectId("66a500000000000000000002"),
    userId: ObjectId("66a200000000000000000003"),
    status: "active",
    plan: "monthly-12pack",
    nextBillingDate: new Date("2026-05-01"),
    preferences: ["Root Beer", "Tropical", "Lemon"],
    createdAt: new Date("2026-04-01"),
  },
  {
    _id: ObjectId("66a500000000000000000003"),
    userId: ObjectId("66a200000000000000000005"),
    status: "paused",
    plan: "monthly-6pack",
    nextBillingDate: new Date("2026-06-25"),
    preferences: ["Blue Hawaii", "Mojito", "Punch"],
    createdAt: new Date("2026-03-25"),
  },
]);

db.subscriptions.find({});
