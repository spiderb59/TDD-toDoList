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

        // Test case for editing an existing todo item
    describe('editTodo()', function() {
        it('should edit an existing todo item', function() {
            const editedTodo = {
                id: "todo-123",
                title: "Edited Todo",
                description: "This todo item has been edited",
                dueDate: "2024-05-05",
                priority: "Medium"
            };
            const result = editTodo(editedTodo);
            assert.isTrue(result);
        });

        it('should return false if the todo item to edit does not exist', function() {
            const nonExistentTodo = {
                id: "non-existent-todo",
                title: "Edited Todo",
                description: "This todo item has been edited",
                dueDate: "2024-05-05",
                priority: "Medium"
            };
            const result = editTodo(nonExistentTodo);
            assert.isFalse(result);
        });
    });
 // Test case for deleting a todo item
    describe('deleteTodo()', function() {
        it('should delete an existing todo item', function() {
            const todoIdToDelete = "todo-123";
            const result = deleteTodo(todoIdToDelete);
            assert.isTrue(result);
        });

        it('should return false if the todo item to delete does not exist', function() {
            const nonExistentTodoId = "non-existent-todo";
            const result = deleteTodo(nonExistentTodoId);
            assert.isFalse(result);
        });
    });
});

