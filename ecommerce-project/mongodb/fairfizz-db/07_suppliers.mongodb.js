use("fairfizz-db");

db.suppliers.deleteMany({});
db.ingredients.deleteMany({});

db.suppliers.insertMany([
  {
    _id: ObjectId("66a700000000000000000001"),
    name: "SweetCane Co.",
    contactInfo: "contact@sweetcane.com",
    type: "ingredients",
  },
  {
    _id: ObjectId("66a700000000000000000002"),
    name: "FlavorMax Labs",
    contactInfo: "orders@flavormax.com",
    type: "ingredients",
  },
  {
    _id: ObjectId("66a700000000000000000003"),
    name: "CarbonGas Inc.",
    contactInfo: "sales@carbongas.com",
    type: "co2",
  },
  {
    _id: ObjectId("66a700000000000000000004"),
    name: "EcoPack Solutions",
    contactInfo: "info@ecopack.com",
    type: "packaging",
  },
  {
    _id: ObjectId("66a700000000000000000005"),
    name: "NaturalSweet Organic",
    contactInfo: "hello@naturalsweet.com",
    type: "ingredients",
  },
]);

db.ingredients.insertMany([
  {
    _id: ObjectId("66a7i0000000000000000001"),
    supplierId: ObjectId("66a700000000000000000001"),
    name: "Cane Sugar",
    type: "sugar",
  },
  {
    _id: ObjectId("66a7i0000000000000000002"),
    supplierId: ObjectId("66a700000000000000000005"),
    name: "Stevia Extract",
    type: "sugar",
  },
  {
    _id: ObjectId("66a7i0000000000000000003"),
    supplierId: ObjectId("66a700000000000000000002"),
    name: "Cola Flavor Concentrate",
    type: "flavor",
  },
  {
    _id: ObjectId("66a7i0000000000000000004"),
    supplierId: ObjectId("66a700000000000000000002"),
    name: "Cherry Flavor Concentrate",
    type: "flavor",
  },
  {
    _id: ObjectId("66a7i0000000000000000005"),
    supplierId: ObjectId("66a700000000000000000002"),
    name: "Ginger Extract",
    type: "flavor",
  },
  {
    _id: ObjectId("66a7i0000000000000000006"),
    supplierId: ObjectId("66a700000000000000000003"),
    name: "Carbon Dioxide (CO2)",
    type: "co2",
  },
  {
    _id: ObjectId("66a7i0000000000000000007"),
    supplierId: ObjectId("66a700000000000000000004"),
    name: "Aluminum Cans 355ml",
    type: "packaging",
  },
  {
    _id: ObjectId("66a7i0000000000000000008"),
    supplierId: ObjectId("66a700000000000000000004"),
    name: "Aluminum Cans 500ml",
    type: "packaging",
  },
  {
    _id: ObjectId("66a7i0000000000000000009"),
    supplierId: ObjectId("66a700000000000000000004"),
    name: "Cardboard 6-Pack Holders",
    type: "packaging",
  },
]);

db.suppliers.find({});
print("---");
db.ingredients.find({});
