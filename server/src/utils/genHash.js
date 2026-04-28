const bcrypt = require("bcryptjs");

// Generate Hash
async function genHashData(code, salt = 10) {
  try {
    const hash = await bcrypt.hash(code, salt);
    if (!hash) {
      throw new Error("failed to generate");
    }
    return { isError: false, data: hash, message: null };
  } catch (error) {
    if (error) {
      return { isError: true, message: error.message, data: null };
    }
  }
}

// Verify Hash Data
async function verifyHashData(code, dbCode) {
  try {
    const isVerify = await bcrypt.compare(code, dbCode);
    if (!isVerify) {
      throw new Error("failed to verify. Please try again later!");
    }
    return isVerify;
  } catch (error) {
    if (error) {
      return { isError: true, message: error.message };
    }
  }
}

module.exports = { genHashData, verifyHashData };
