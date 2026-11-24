const db = require('../config/db');

const getAllUsers = async () => {
    try {
        const result = await db.query('SELECT * FROM users');

        const rows = result[0];

        return rows;

    } catch (error) {
        console.log('Database Error:', error.message);
        throw error;
    }
};

module.exports = {
    getAllUsers
};

