var express = require('express');
var router = express.Router();
const userController = require('../controllers/loginController');

router.post('/login', userController.loginUser);

router.post('/register', userController.registerUser);

router.get('/listUsers', userController.getListUsers);

module.exports = router;
