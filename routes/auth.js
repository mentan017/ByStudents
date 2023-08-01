//Import modules
const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {v4: uuidv4} = require('uuid');

//Import MongoDB models
const ActivationToken = require('../models/activationtoken.js');
const CookieModel = require('../models/cookie.js');
const UserModel = require('../models/user.js');

//Global variables
const router = express.Router();
const homeDirectory = path.join(__dirname, '..');

//Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/Documate', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Configure routes

//GET routes
router.get('/', function(req, res){
    res.status(308).redirect('/auth/login');
});
router.get('/login', function(req, res){
    res.status(200).sendFile(`${homeDirectory}/Client/Auth/Login/index.html`);
});

//POST routes
//PUT routes

module.exports = router;