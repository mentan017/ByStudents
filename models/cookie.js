const mongoose = require('mongoose');

const CookieSchema = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId
    },
    UUID:{
        type: String
    },
    expireAt:{
        type: Date,
        expires: 60*60*24*14, //Cookie expires after 2 weeks
        default: Date.now()
    }
});

module.exports = mongoose.model('Cookie', CookieSchema);