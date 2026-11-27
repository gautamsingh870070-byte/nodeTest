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

const addUser = async ({ name, email, phone }) => {

    const result = await db.query('insert into users (name, email, phone) values (?,?,?)', [name, email, phone]);
    return result; 
};

const getUserByEmail = async (email) => {
    const result = await db.query('select * from users where email = ?', [email]);
    return result;
};

const updateUser = async (id, {name, email, phone}) => {
    const result = await db.query('update users set name = ?, email = ?, phone = ? where id =?', [name, email, phone, id]);
    return result;
};

const deleteUser = async (id) => {
    const result = await db.query('delete from users where id = ?', [id]);
    return result;
};   

const getUserById = async (id) => {
    const result = await db.query('select * from users where id = ?', [id]);
    return result;
};
module.exports = {
    getAllUsers,
    addUser,
    getUserByEmail,
    updateUser,
    deleteUser,
    getUserById
};

