const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({ path: "././config.env" });

var connectdb = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  // port:process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
connectdb.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});
module.exports = connectdb;
