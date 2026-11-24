const mysql = require('mysql2');
//require('dotenv').config();

const db = mysql.createPool({
    host: 'localhost', // process.env.DB_HOST,
    user: 'root',      // process.env.DB_USER,
    password: '',      // process.env.DB_PASSWORD,
    database: 'nodeApp_db', //process.env.DB_NAME,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL Database Connected Successfully!');
    connection.release(); // Release the connection back to the pool
});

module.exports = db.promise(); // Export the promise-based pool for async/await usage