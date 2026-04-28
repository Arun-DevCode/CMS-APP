const server = require("./app");
const connectWithDB = require("./src/config/db.config");
const dotenv = require("dotenv");

// env loader
dotenv.config();

// Server Port
const PORT = 5000;
console.log(PORT);

// Start Server
server.listen(PORT, async (err) => {
  await connectWithDB();
  if (err) {
    console.log(err);
  }
  console.log("App running..");
});
