const assert = require('chai').assert; 

const { createTodo, editTodo, deleteTodo } = require('./todoFunctions');

const sampleTodo = {
    title: "Sample Todo",
    description: "This is a sample todo item",
    dueDate: "2024-04-30",
    priority: "High"
};

