const mysql = require("mysql")
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SRKinnepal98",
  database: "todo",
})

module.exports = db;