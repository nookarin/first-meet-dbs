use("fairfizz-db");

db.manufacturers.deleteMany({});
db.equipment.deleteMany({});

db.manufacturers.insertMany([
  {
    _id: ObjectId("66a900000000000000000001"),
    name: "FairFizz Main Factory",
    location: "Portland, OR",
  },
]);

db.equipment.insertMany([
  {
    _id: ObjectId("66a9e0000000000000000001"),
    manufacturerId: ObjectId("66a900000000000000000001"),
    name: "Water Treatment System",
    type: "water-treatment",
    lastMaintenance: new Date("2026-03-15"),
  },
  {
    _id: ObjectId("66a9e0000000000000000002"),
    manufacturerId: ObjectId("66a900000000000000000001"),
    name: "Carbonator 3000",
    type: "carbonator",
    lastMaintenance: new Date("2026-02-28"),
  },
  {
    _id: ObjectId("66a9e0000000000000000003"),
    manufacturerId: ObjectId("66a900000000000000000001"),
    name: "Bottle Filler Line A",
    type: "filler",
    lastMaintenance: new Date("2026-04-01"),
  },
  {
    _id: ObjectId("66a9e0000000000000000004"),
    manufacturerId: ObjectId("66a900000000000000000001"),
    name: "Labeling Machine",
    type: "labeler",
    lastMaintenance: new Date("2026-03-20"),
  },
]);

db.manufacturers.find({});
print("---");
db.equipment.find({});
