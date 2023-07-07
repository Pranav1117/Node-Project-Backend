const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretkey = process.env.secretkey;
/*const Auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // Verify the token
    jwt.verify(token, secretkey, (err, decoded) => {
      if (err) {
        // Token is invalid or expired
        return res.status(401).json({ error: "Invalid token" });
      } else {
        // Token is valid
        req.user = decoded; // Attach the decoded user information to the request object
        next();
      }
    });
  } else {
    // Token is missing
    return res.status(401).json({ error: "Token missing" });
  }
};

module.exports = Auth;*/


