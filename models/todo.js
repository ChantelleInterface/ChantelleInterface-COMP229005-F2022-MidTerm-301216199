// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 29th 2022
// Filename: todo.js

// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);