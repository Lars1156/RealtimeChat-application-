const mongoose = require('mongoose');
const { type } = require('os');

const userConversationSchema = new mongoose.Schema({
    members: {
        type:Array,
        required:true
    },
    
});

const UserConversation  =  mongoose.model('UserConversation ', userConversationSchema);
module.exports = UserConversation