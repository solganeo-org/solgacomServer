const mysql = require('mysql')

// local mysql db connection

const connection = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: 'solganeo_web_push'
}

const dbConn = mysql.createConnection(connection)

dbConn.connect(function (err) {
  if (err) throw err

  console.log('Database Connected!')
  console.log('Deploy Test2!')
})

module.exports = dbConn
