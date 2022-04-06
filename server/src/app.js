const express = require('express');
const dbConnect = require('./config/dbConnect')
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Badhir");
});

dbConnect();

module.exports = app;