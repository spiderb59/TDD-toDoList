

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
        editTodoItem(todoId);
    } else if (target.classList.contains('delete-btn')) {
        // Handle delete button click
        const todoId = target.getAttribute('data-id');
        // Implement delete functionality
        deleteTodoItem(todoId);
    }
}

// Function to edit a todo item
function editTodoItem(todoId) {
    // Find the todo item in the todoList array
    const todoItem = todoList.find(todo => todo.id === todoId);
    if (todoItem) {
        // Example: You can open a modal or a form to edit the todo item here
        console.log('Editing todo with ID:', todoId);
        console.log('Todo details:', todoItem);
    } else {
        console.error('Todo item not found.');
    }
}

// Function to delete a todo item
function deleteTodoItem(todoId) {
    // Find the index of the todo item in the todoList array
    const index = todoList.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
        // Remove the todo item from the todoList array
        todoList.splice(index, 1);
        // Re-render the todo list
        renderTodoList(todoList);
        console.log('Deleted todo with ID:', todoId);
    } else {
        console.error('Todo item not found.');
    }
}


// Event listener for form submission
document.getElementById('todo-form').addEventListener('submit', handleFormSubmit);

// Event listener for button clicks within the todo list
document.getElementById('todo-list').addEventListener('click', handleButtonClick);
