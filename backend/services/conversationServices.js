const ConverSation = require('../model/userConverstion');
const User = require('../model/user');

const createConversation  = async(participants)=>{
    const conversation = new ConverSation({participants});
    await conversation.save();
    return conversation;
}
const getUserConversations = async (userId) => {
    return await Conversation.find({ participants: userId })
      .populate('participants', 'username')
      .populate('lastMessage');
  };
  
  module.exports = { createConversation, getUserConversations };