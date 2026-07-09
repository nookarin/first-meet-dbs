use("fairfizz-db");

db.orders.deleteMany({});
db.orderItems.deleteMany({});

db.orders.insertMany([
  {
    _id: ObjectId("66a300000000000000000001"),
    userId: ObjectId("66a200000000000000000002"),
    status: "delivered",
    total: 89,
    shippingAddress: "123 Main St, Portland, OR 97201",
    paymentIntentId: "pi_placeholder_001",
    createdAt: new Date("2026-03-20"),
  },
  {
    _id: ObjectId("66a300000000000000000002"),
    userId: ObjectId("66a200000000000000000003"),
    status: "shipped",
    total: 169,
    shippingAddress: "456 Oak Ave, Seattle, WA 98101",
    paymentIntentId: "pi_placeholder_002",
    createdAt: new Date("2026-04-01"),
  },
  {
    _id: ObjectId("66a300000000000000000003"),
    userId: ObjectId("66a200000000000000000004"),
    status: "paid",
    total: 40,
    shippingAddress: "789 Pine Rd, San Francisco, CA 94102",
    paymentIntentId: "pi_placeholder_003",
    createdAt: new Date("2026-04-10"),
  },
  {
    _id: ObjectId("66a300000000000000000004"),
    userId: ObjectId("66a200000000000000000002"),
    status: "pending",
    total: 329,
    shippingAddress: "123 Main St, Portland, OR 97201",
    paymentIntentId: "pi_placeholder_004",
    createdAt: new Date("2026-04-15"),
  },
  {
    _id: ObjectId("66a300000000000000000005"),
    userId: ObjectId("66a200000000000000000005"),
    status: "delivered",
    total: 60,
    shippingAddress: "321 Elm St, Denver, CO 80201",
    paymentIntentId: "pi_placeholder_005",
    createdAt: new Date("2026-03-25"),
  },
]);

db.orderItems.insertMany([
  {
    _id: ObjectId("66a3i0000000000000000001"),
    orderId: ObjectId("66a300000000000000000001"),
    productId: ObjectId("66a100000000000000000016"),
    quantity: 1,
    unitPrice: 89,
  },
  {
    _id: ObjectId("66a3i0000000000000000002"),
    orderId: ObjectId("66a300000000000000000002"),
    productId: ObjectId("66a100000000000000000017"),
    quantity: 1,
    unitPrice: 169,
  },
  {
    _id: ObjectId("66a3i0000000000000000003"),
    orderId: ObjectId("66a300000000000000000003"),
    productId: ObjectId("66a100000000000000000001"),
    quantity: 2,
    unitPrice: 20,
  },
  {
    _id: ObjectId("66a3i0000000000000000004"),
    orderId: ObjectId("66a300000000000000000004"),
    productId: ObjectId("66a100000000000000000018"),
    quantity: 1,
    unitPrice: 329,
  },
  {
    _id: ObjectId("66a3i0000000000000000005"),
    orderId: ObjectId("66a300000000000000000005"),
    productId: ObjectId("66a100000000000000000003"),
    quantity: 3,
    unitPrice: 20,
  },
]);

db.orders.find({});
print("---");
db.orderItems.find({});
