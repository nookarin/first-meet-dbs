use("fairfizz-db");

db.warehouses.deleteMany({});
db.productStock.deleteMany({});

db.warehouses.insertMany([
  {
    _id: ObjectId("66a800000000000000000001"),
    name: "Portland Main Warehouse",
    location: "Portland, OR",
  },
  {
    _id: ObjectId("66a800000000000000000002"),
    name: "Denver Distribution Hub",
    location: "Denver, CO",
  },
]);

db.productStock.insertMany([
  {
    _id: ObjectId("66a8s0000000000000000001"),
    warehouseId: ObjectId("66a800000000000000000001"),
    productId: ObjectId("66a100000000000000000001"),
    quantity: 100,
  },
  {
    _id: ObjectId("66a8s0000000000000000002"),
    warehouseId: ObjectId("66a800000000000000000001"),
    productId: ObjectId("66a100000000000000000003"),
    quantity: 80,
  },
  {
    _id: ObjectId("66a8s0000000000000000003"),
    warehouseId: ObjectId("66a800000000000000000002"),
    productId: ObjectId("66a100000000000000000001"),
    quantity: 50,
  },
  {
    _id: ObjectId("66a8s0000000000000000004"),
    warehouseId: ObjectId("66a800000000000000000002"),
    productId: ObjectId("66a100000000000000000011"),
    quantity: 30,
  },
]);

db.warehouses.find({});
print("---");
db.productStock.find({});
