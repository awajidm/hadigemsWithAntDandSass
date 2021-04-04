const Product = require("../models/product");
const connectDb = require("../config/database");
const dotenv = require("dotenv");

const products = require("../data/product.json");

dotenv.config({ path: "backend/config/config.env" });

connectDb();

const DbSeeder = async () => {
  try {
    await Product.deleteMany();
    console.log("all collections deleted");

    await Product.insertMany(products);
    console.log("succesfully added!");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

DbSeeder();
