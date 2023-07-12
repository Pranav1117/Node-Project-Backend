const dotenv = require("dotenv");

dotenv.config();
const secretkey = process.env.secretkey;

const isLoggedIn = (req) => {
  console.log(req.body, "in checkkingnng");
  try {
    const decoded = jwt.verify(req.body, secretkey);

    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      return res.send;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

module.exports = isLoggedIn;
