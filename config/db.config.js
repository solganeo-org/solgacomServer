const mysql = require('mysql')
const dotenv = require('dotenv').config()

//local mysql db connection

const dbConn = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '1234',
  database: 'solganeo_web_push',
})

dbConn.connect(function (err) {
  if (err) throw err

  console.log('Database Connected!')
})

module.exports = dbConn
