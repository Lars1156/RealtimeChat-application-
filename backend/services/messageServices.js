const Message = require('../model/message');
const Conversation = require('../model/userConverstion');

// Creating the New message
const createMessage =  async(senderId, receiverId, content, conversationId)=>{
    const message = new Message({
        sender: senderId,
        receiver: receiverId,
        content,
        conversationId
      });
      await message.save();
      const conversation = await Conversation.findById(conversationId);
      conversation.lastMessage = message._id;
      await conversation.save();

  return message;
}

const getMessageByConversion = async(conversationId) =>{
    return await Message.find({ conversationId }).populate('sender receiver');
}

module.exports = {
    createMessage,
    getMessageByConversion
}