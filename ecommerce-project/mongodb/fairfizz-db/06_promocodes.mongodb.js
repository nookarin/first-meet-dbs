use("fairfizz-db");

db.promocodes.deleteMany({});

db.promocodes.insertMany([
  {
    _id: ObjectId("66a600000000000000000001"),
    code: "WELCOME10",
    discountType: "percentage",
    discountValue: 10,
    maxUses: 100,
    expiresAt: new Date("2026-12-31"),
  },
  {
    _id: ObjectId("66a600000000000000000002"),
    code: "FIZZ50",
    discountType: "fixed",
    discountValue: 50,
    maxUses: 50,
    expiresAt: new Date("2026-06-30"),
  },
  {
    _id: ObjectId("66a600000000000000000003"),
    code: "SODADROP",
    discountType: "percentage",
    discountValue: 15,
    maxUses: 200,
    expiresAt: new Date("2026-08-31"),
  },
  {
    _id: ObjectId("66a600000000000000000004"),
    code: "FREESHIP",
    discountType: "fixed",
    discountValue: 0,
    maxUses: 500,
    expiresAt: new Date("2026-05-31"),
  },
]);

db.promocodes.find({});
