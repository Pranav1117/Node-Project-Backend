const express = require("express");
const { connection } = require("./config/mongodb");
const { route } = require("./Routes/routes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
port = process.env.Port;
const auth = require("./middleware/Auth");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(route);

app.listen(port, async () => {
  try {
    await connection();
    console.log(`server running on ${port} `);
  } catch (err) {
    console.log(err);
  }
});
