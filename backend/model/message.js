const mongoose = require('mongoose');
const { type } = require('os');

const messageSchema = new mongoose.Schema({
    converSessionId:{
        type:String,

    },
    senderId:{
        type:String
    },
    message:{
        type:String
    }
});

const Messager = mongoose.model('Messager', messageSchema);
module.exports = Messager