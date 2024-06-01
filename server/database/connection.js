const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost/argentBankDB";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    console.log("Base de données connectée avec succès");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
