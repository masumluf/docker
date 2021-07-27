const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://fusionRead:b66e983iFusion@206.116.52.4:27017/fusionread?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => console.log(err));
