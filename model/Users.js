const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const User = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("Users", User);

module.exports = Users;
