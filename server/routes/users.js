var express = require('express');
var router = express.Router();
const userController = require('../controllers/loginController');
const userFacadeController = require('../controllers/userInfoFacadeController');

router.post('/login', userController.loginUser);

router.post('/register', userController.registerUser);

router.get('/:id', userFacadeController.getUserInfoById);

router.get('/listUsers', userFacadeController.getUsers);

router.put('/subscribers/:id', userFacadeController.subscribersToUsers);

module.exports = router;
