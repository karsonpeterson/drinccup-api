require('dotenv').config()
var mysql = require('mysql');

var connection;

function connectDb() {
    if (!connection) {
        connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
        connection.connect((err) => {
            if (err) throw err;
            else console.log('Connected to DB');
        });
    }
    return connection;
}



module.exports = connectDb();