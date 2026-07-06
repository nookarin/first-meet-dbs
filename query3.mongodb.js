use("sample_mflix");

//How many theaters does AL state has?
//db.theaters.find({ "location.address.state": "AL" }).count()
//db.theaters.find({ "location.address.city": "La Quinta" }).count()
//db.theaters.find({ "location.address.city": "La Quinta" }).count()
//db.theaters.findOne({ "location.address.city": "La Quinta" })
db.theaters.findOne({ "location.address.city": "La Quinta" })

