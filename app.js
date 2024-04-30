// Import functions from todoFunctions.js
const { createTodo, editTodo, deleteTodo } = require('./todoFunctions');

// Function to generate a unique ID for new todo items
function generateTodoId() {
    return 'todo-' + Math.random().toString(36).substr(2, 9);
}

// Function to render todo list items
function renderTodoList(todoList) {
    const todoListElement = document.getElementById('todo-list');
    // Clear existing todo list
    todoListElement.innerHTML = '';

    // Render each todo item
    todoList.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span>Title: ${todo.title}</span><br>
            <span>Description: ${todo.description}</span><br>
            <span>Due Date: ${todo.dueDate}</span><br>
            <span>Priority: ${todo.priority}</span><br>
            <button class="edit-btn" data-id="${todo.id}">Edit</button>
            <button class="delete-btn" data-id="${todo.id}">Delete</button>
        `;
        todoListElement.appendChild(todoItem);
    });
}

// Function to handle form submission for adding a new todo item
function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const todoData = {
        title: formData.get('title'),
        description: formData.get('description'),
        dueDate: formData.get('due-date'),
        priority: formData.get('priority')
    };

    const newTodo = createTodo(todoData);
    if (newTodo) {
        renderTodoList(todoList);
        event.target.reset();
    }
}

// Function to handle button click for editing or deleting a todo item
function handleButtonClick(event) {
    const target = event.target;
    if (target.classList.contains('edit-btn')) {
        // Handle edit button click
        const todoId = target.getAttribute('data-id');
        // Implement edit functionality
        const editedTodo = /* Fetch the todo item to be edited based on todoId */;
        // Assuming there's a function editTodoItem to handle editing
        editTodoItem(editedTodo);
    } else if (target.classList.contains('delete-btn')) {
        // Handle delete button click
        const todoId = target.getAttribute('data-id');
        // Implement delete functionality
        // Assuming there's a function deleteTodoItem to handle deletion
        deleteTodoItem(todoId);
    }
}

// Function to handle editing a todo item
function editTodoItem(editedTodo) {
    // Prompt user for new data or open a modal for editing
    const newData = prompt('Enter the updated data for the todo item:', JSON.stringify(editedTodo));
    if (newData) {
        try {
            const updatedTodo = JSON.parse(newData);
            // Update the todo item using the updated data
            const success = editTodo(updatedTodo);
            if (success) {
                console.log('Todo item successfully edited:', updatedTodo.id);
                // Call render function to update the UI
                renderTodoList(todoList);
            } else {
                console.error('Failed to edit todo item:', updatedTodo.id);
            }
        } catch (error) {
            console.error('Invalid data entered:', newData);
        }
    }
}

// Function to handle deleting a todo item
function deleteTodoItem(todoId) {
    // Confirm deletion with the user
    const confirmDelete = confirm('Are you sure you want to delete this todo item?');
    if (confirmDelete) {
        // Delete the todo item
        const success = deleteTodo(todoId);
        if (success) {
            console.log('Todo item successfully deleted:', todoId);
            // Call render function to update the UI
            renderTodoList(todoList);
        } else {
            console.error('Failed to delete todo item:', todoId);
        }
    }
}

// Event listener for form submission
document.getElementById('todo-form').addEventListener('submit', handleFormSubmit);

// Event listener for button clicks within the todo list
document.getElementById('todo-list').addEventListener('click', handleButtonClick);
