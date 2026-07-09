use("fairfizz-db");

db.accounting.deleteMany({});
db.supplierPayments.deleteMany({});

db.accounting.insertMany([
  {
    _id: ObjectId("66aC0000000000000000001"),
    revenue: 10980,
    costs: 7230,
    period: new Date("2026-03-01"),
  },
  {
    _id: ObjectId("66aC0000000000000000002"),
    revenue: 15420,
    costs: 9850,
    period: new Date("2026-04-01"),
  },
]);

db.supplierPayments.insertMany([
  {
    _id: ObjectId("66aCp0000000000000000001"),
    supplierId: ObjectId("66a700000000000000000001"),
    amount: 3200,
    period: new Date("2026-03-01"),
    status: "paid",
  },
  {
    _id: ObjectId("66aCp0000000000000000002"),
    supplierId: ObjectId("66a700000000000000000003"),
    amount: 1500,
    period: new Date("2026-03-01"),
    status: "paid",
  },
  {
    _id: ObjectId("66aCp0000000000000000003"),
    supplierId: ObjectId("66a700000000000000000004"),
    amount: 2530,
    period: new Date("2026-04-01"),
    status: "pending",
  },
]);

db.accounting.find({});
print("---");
db.supplierPayments.find({});
