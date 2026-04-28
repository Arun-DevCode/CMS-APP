const db = require("mongoose");

// Connection
async function connectWithDB() {
  try {
    const connection = await db.connect("mongodb://localhost:27017/cms-db");
    if (!connection) {
      throw new Error("failed to connect db!!");
    }
    console.log("DB CONNECTED");
  } catch (error) {
    if (error) {
      process.exit(0);
    }
  }
}

module.exports = connectWithDB;
