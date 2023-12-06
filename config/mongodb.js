const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const url =
  "mongodb+srv://pranavbavaskar1:7HDRrn9dp2cWqsjs@cluster0.knpri7w.mongodb.net/?retryWrites=true&w=majority";

const connection = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log("connected with atlas");

  } catch (err) {
    console.log(err);
  }
};

module.exports = { connection };
