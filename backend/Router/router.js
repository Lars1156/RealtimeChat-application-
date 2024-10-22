const express = require ('express');
const router = express.Router();
const userController = require('../controller/userController');
const messageController = require('../controller/messageController');

router.post('/register' , userController.register);
router.post ('./login', userController.login);
router.get('./getUser' , userController.getUser);