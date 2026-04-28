const mongoose = require("mongoose");

// USER SCHEMA
const AccountSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      default: "learner",
    }, // admin , user
  },
  { timeStamp: true },
);

// MODAL : COLLECTION
const Account = mongoose.model("users", AccountSchema);

//indexing
// Account.index({ email: 1 }); // single field
// Account.index({ name: 1, role: 1 }); // compound fields index
// Account.index({ role: 1 }); // multi key index

module.exports = Account;
