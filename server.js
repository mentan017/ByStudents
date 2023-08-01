//Import modules
const cookieParser = require('cookie-parser');
const express = require('express');
const fs = require('fs');
const https = require('https');
const mongoose = require('mongoose');
const expressWinston = require('express-winston');
const winston = require('winston');
require('dotenv').config();

//Import routes
const AuthRouter = require('./routes/auth.js');

//Import MongoDB models
const CookieModel = require('./models/cookie.js');
const UserModel = require('./models/user.js');

//Import the SSL certificate
const sslOptions = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt')
};

//Global variables
const app = express();
const server = https.createServer(sslOptions, app);

//App configuration
app.use(express.static(__dirname + '/Client'));
app.use(express.json());
app.use(cookieParser());

//Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/Documate', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Configure routes

app.get('/', function(req, res){
    res.status(200).sendFile(`${__dirname}/Client/Home/index.html`);
});

//Connect routes
app.use('/auth', AuthRouter);

//Start server
server.listen(process.env.PORT);
console.log(`By Students listening on port : ${process.env.PORT}`);