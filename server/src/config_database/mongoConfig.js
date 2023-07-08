const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const database = "Ecommerce_books";
const db_connect = async (collection) => {
  let con = await client.connect();
  let db = con.db(database);
  return db.collection(collection);
};

module.exports = db_connect;
