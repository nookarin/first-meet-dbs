use("fairfizz-db");

db.distributors.deleteMany({});

db.distributors.insertMany([
  {
    _id: ObjectId("66aA0000000000000000001"),
    name: "PDX Logistics",
    region: "Pacific Northwest",
  },
  {
    _id: ObjectId("66aA0000000000000000002"),
    name: "Rocky Mountain Distribution",
    region: "Mountain West",
  },
  {
    _id: ObjectId("66aA0000000000000000003"),
    name: "West Coast Express",
    region: "California & West Coast",
  },
]);

db.distributors.find({});
