// Define todoList variable to store todo items
let todoList = [];

// Function to generate a unique ID for new todo items
function generateTodoId() {
    return 'todo-' + Math.random().toString(36).substr(2, 9);
}

// Function to create a new todo item
function createTodo(todoData) {
    // Validate todo data
    if (!todoData.title || !todoData.dueDate || !todoData.priority) {
        console.error('Incomplete todo data.');
        return null;
    }

    // Generate unique ID
    const id = generateTodoId();

    // Create new todo item
    const newTodo = {
        id: id,
        title: todoData.title,
        description: todoData.description || '',
        dueDate: todoData.dueDate,
        priority: todoData.priority,
        completed: false
    };

    // Add new todo item to the todo list
    todoList.push(newTodo);

    return newTodo;
}

// Function to edit an existing todo item
function editTodo(editedTodo) {
    // Find the index of the todo item to edit
    const index = todoList.findIndex(todo => todo.id === editedTodo.id);

    // If todo item not found, return false
    if (index === -1) {
        console.error('Todo item not found.');
        return false;
    }

    // Update the todo item with edited data
    todoList[index].title = editedTodo.title || todoList[index].title;
    todoList[index].description = editedTodo.description || todoList[index].description;
    todoList[index].dueDate = editedTodo.dueDate || todoList[index].dueDate;
    todoList[index].priority = editedTodo.priority || todoList[index].priority;

    return true;
}

// Function to delete a todo item
function deleteTodo(todoId) {
    // Find the index of the todo item to delete
    const index = todoList.findIndex(todo => todo.id === todoId);

    // If todo item not found, return false
    if (index === -1) {
        console.error('Todo item not found.');
        return false;
    }

    // Remove todo item from the todo list
    todoList.splice(index, 1);

    return true;
}

// Export functions for use in other modules (for browser environment)
window.todoFunctions = {
    createTodo,
    editTodo,
    deleteTodo
};
