const userModel = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        console.log('Users fetched successfully:', users);
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            total: users.length,
            data: users
        });
    } catch (error) { 
        console.error('Error fetching users:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    getUsers
};


