const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

const loggerMiddleware = require('../middleware/logger.middleware');

router.get('/test', loggerMiddleware, (req, res) => {

    res.status(200).json({
        success: true,
        message: 'Test API working successfully'
    });

});

router.get('/users', userController.getUsers);
router.post('/adduser', userController.addUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/getUserById/:id', userController.getUserById);

module.exports = router;