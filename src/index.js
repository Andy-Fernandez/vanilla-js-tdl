// Get the "Add Task" button and the task window
const showAddTaskButton = document.getElementById("showAddTaskButton");
const addTaskWindow = document.getElementById("addTaskWindow");
const cancelAddTaskButton = document.getElementById("cancelAddTaskButton");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todoList");
const searchInput = document.querySelector('.todo-search input');
const todoItems = document.querySelectorAll('.todo-item');


showAddTaskButton.addEventListener("click", function() {
    addTaskWindow.style.display = "block";
});

cancelAddTaskButton.addEventListener("click", function() {
    addTaskWindow.style.display = "none";
});

addTaskButton.addEventListener("click", function() {
    const newTaskInput = document.querySelector(".new-task-input");
    const taskDescription = newTaskInput.value.trim();

    if (taskDescription !== "") {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        const todoItemText = document.createElement("div");
        todoItemText.classList.add("todo-item-text");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const id = "todo" + (todoList.childElementCount + 1);
        checkbox.id = id;
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = taskDescription;

        todoItemText.appendChild(checkbox);
        todoItemText.appendChild(label);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        const deleteImg = document.createElement("img");
        deleteImg.src = "./img/wrong-delete-remove.svg";
        deleteImg.alt = "Delete";
        deleteButton.appendChild(deleteImg);

        todoItem.appendChild(todoItemText);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);

        newTaskInput.value = "";

        // Add event listener to the newly created delete button
        deleteButton.addEventListener("click", function() {
            // Get the parent todo item
            const todoItem = deleteButton.closest(".todo-item");
            
            // Remove the todo item from the todo list
            todoItem.remove();
        });
    }
});


// Get all delete buttons
const deleteButtons = document.querySelectorAll(".delete-button");

// Add event listener to each delete button
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the parent todo item
        const todoItem = button.closest(".todo-item");
        
        // Remove the todo item from the todo list
        todoItem.remove();
    });
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim().toLowerCase();

        todoItems.forEach(function(todoItem) {
            const todoItemText = todoItem.querySelector('.todo-item-text label').textContent.toLowerCase();

            if (searchTerm === '') {
                // Show all todo items if search term is empty
                todoItem.style.display = 'flex';
            } else if (!todoItemText.includes(searchTerm)) {
                todoItem.style.display = 'none';
            }
        });
    }
});