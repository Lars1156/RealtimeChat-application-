const messageServices = require('../services/messageServices')

// Create a new message
const createMessage = async (req, res) => {
  try {
    const { receiverId, content, conversationId } = req.body;
    const message = await messageServices.createMessage(req.user.id, receiverId, content, conversationId);
    res.json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get messages by conversation ID
const getMessages = async (req, res) => {
  try {
    const messages = await messageServices.getMessagesByConversation(req.params.conversationId);
    res.json(messages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createMessage, getMessages };
