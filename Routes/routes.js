const route = require("express").Router();
const {
  Data,
  Register,
  Login,
  bollywood,
  hollywood,
  auth,
} = require("../controllers/APi");

route.use("/data", Data);

//route.use("/bollywood", auth, bollywood);
//route("/fitness", fitness);
//route.use("/hollywood", hollywood);
//route("/technology", technology);
//route("/gaming", gaming);

route.post("/register", Register);

route.post("/login", Login);

module.exports = { route };
