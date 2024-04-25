const assert = require('chai').assert; 

const { createTodo, editTodo, deleteTodo } = require('./todoFunctions');

const sampleTodo = {
    title: "Sample Todo",
    description: "This is a sample todo item",
    dueDate: "2024-04-30",
    priority: "High"
};

describe('Todo Functions', function() {
    // Test case for creating a new todo item
    describe('createTodo()', function() {
        it('should create a new todo item with valid data', function() {
            const newTodo = createTodo(sampleTodo);
            assert.isObject(newTodo);
            assert.property(newTodo, 'id');
            assert.equal(newTodo.title, sampleTodo.title);
            assert.equal(newTodo.description, sampleTodo.description);
            assert.equal(newTodo.dueDate, sampleTodo.dueDate);
            assert.equal(newTodo.priority, sampleTodo.priority);
        });

        it('should not create a new todo item with invalid data', function() {
            const invalidTodo = {
                title: "",
                description: "This is an invalid todo item",
                dueDate: "2024-04-30",
                priority: "Low"
            };
            const newTodo = createTodo(invalidTodo);
            assert.isNull(newTodo);
        });
    });
}

