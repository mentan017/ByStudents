const mongoose = require('mongoose');

const ActivationToken = new mongoose.Schema({
    UserID:{
        type: mongoose.Schema.Types.ObjectId
    },
    Token1:{
        type: String
    },
    Token2:{
        type: String
    },
    expireAt:{
        type: Date,
        expires: 60*30, //The new user will expire after 30min if he doesn't confirm his email
        default: Date.now()
    }
});

module.exports = mongoose.model('Activation Token', ActivationToken);