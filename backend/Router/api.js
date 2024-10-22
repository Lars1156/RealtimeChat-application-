const express = require ('express');
const router = express.Router();
const userController = require('../controller/userController');
const messageController = require('../controller/messageController');
const conversationController = require('../controller/conversationController');
const authMiddleware = require('../middleware/auth');

router.post('/register' , userController.register);
router.post ('./login', userController.login);
router.get('./getUser' , authMiddleware, userController.getUser);

router.post ('/sendMessage' , authMiddleware ,messageController.createMessage);
router.get('/getMessage/:conversationId',authMiddleware,messageController.getMessages);

router.post('/crateConversation' , authMiddleware , conversationController.createConversation);
router.get('/getConversation' , authMiddleware , conversationController.getUserConversations);

module.exports = router;