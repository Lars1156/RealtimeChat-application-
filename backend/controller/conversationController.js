const conersationServices = require('../services/conversationServices')

// Create a new conversation
const createConversation = async (req, res) => {
  try {
    const { participants } = req.body; // participants is an array of user IDs
    const conversation = await conersationServices.createConversation(participants);
    res.json(conversation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all conversations for the logged-in user
const getUserConversations = async (req, res) => {
  try {
    const conversations = await conversations.getUserConversations(req.user.id);
    res.json(conversations);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createConversation, getUserConversations };
