const Account = require("../models/user.model");

function requireRole(authorizedRole) {
  return async (req, res, next) => {
    try {
      const { email, role } = req.payload;

      // check user exits
      const isUserExits = await Account.findOne({ email });
      if (!isUserExits) {
        throw new Error("No User Found. Please register first!");
      }

      // verify role - Permission
      if (role !== authorizedRole) {
        res.status(401).json({
          message: "Access Denied. Please contact admin!",
          error: true,
        });
      }
      // req : payload
      req.user = { email };
      next();
    } catch (err) {
      if (err) {
        res.status(500).json({
          error: true,
          message: "Internal server issue. Please try again later!",
        });
      }
    }
  };
}

module.exports = requireRole;
