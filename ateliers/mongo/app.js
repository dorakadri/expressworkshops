const express = require("express");
const logger =require('morgan');
const createError =require('http-errors');
const mongoose =require("mongoose");
const contactRouter = require('./routes/contacts');
const configDB =require('./data/mongodb.json')
const app =express();
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

app.use('/contact', contactRouter);

app.use((req,res,next)=>
{
        next(createError(404));
}
);

const connect = mongoose.connect(
    configDB.mongo.uri,{
        useNewUrlParser : true,
        useUnifiedTopology:true
    },()=>console.log("connected to DB ")
)
module.exports=app;