const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
    room_id    : Number,
    sender     : String,
    receiver   : String,
    is_active  : Boolean,
    is_updated : Boolean
});

module.exports = mongoose.model(ConversationSchema);