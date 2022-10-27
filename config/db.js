// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 29th 2022
// Filename: db.js

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:f9n69qdg2iHk9cdm@midterm.xgs1meq.mongodb.net/midterm?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}