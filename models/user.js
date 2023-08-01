const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:{
        type: String
    },
    Email:{
        type: String
    },
    Password:{
        type: String
    },
    Activated:{
        type: Boolean
    },
    Birthday:{
        type: Date
    },
    Year:{
        type: String
    },
    ContactEmails:[{
        type: String
    }],
    AboutMe:{
        type: String,
        default: ""
    },
    //Add more analytics here
    PageViews:{
        type: Number
    },
    CreatedDate:{
        type: Date,
        default: Date.now()
    },
    expireAt:{
        type: Date,
        expires: 24*60*60, //The user will expire after 24 hour if he doesn't confirm his email
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);