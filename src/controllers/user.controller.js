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


const addUser = async (req, res) => {
    try {
        const {name, email, phone} = req.body;

        if(!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and phone are required'
            });
        }

          // Validate name length
        if(name.length < 3){
            return res.status(400).json({
                success: false,
                message: 'Name must be at least 3 characters long'
            });
        }
        // Step 4: Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email'
            });
        }

        // Step 5: Phone validation
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: 'Phone number must be 10 digits'
            });
        }
        const existingUser = await userModel.getUserByEmail(email);
         if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
         }
        const result = await userModel.addUser({name, email, phone});
        if(!result) {
            return res.status(500).json({
                success: false,
                message: 'Failed to add user'
            });
        }
        res.status(201).json({
            success: true,
            message: 'User added successfully',
            data: result
        }); 

    } catch (error) { 
        console.error('Add User Error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, phone } = req.body;

        if(!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and phone are required'
            });
        }

          // Validate name length
        if(name.length < 3){
            return res.status(400).json({
                success: false,
                message: 'Name must be at least 3 characters long'
            });
        }
        // Step 4: Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email'
            });
        }

        // Step 5: Phone validation
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: 'Phone number must be 10 digits'
            });
        }

        const result = await userModel.updateUser(userId, {name, email, phone});
        if(!result) {
            return res.status(500).json({
                success: false,
                message: 'Failed to update user'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: result
        });
    }
    catch (error) {
        console.error('Update User Error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }

}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const result = await userModel.deleteUser(userId);
        if(!result) {
            return res.status(500).json({
                success: false,
                message: 'Failed to delete user'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: result
        });
    } catch (error) {
        console.error('Delete User Error:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        const result = await userModel.getUserById(userId);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User found successfully',
            data: result
        });

    } catch (error) {
        console.error('Get User Error:', error.message);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserById
};


