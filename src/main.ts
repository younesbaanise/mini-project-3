let tasks: string[] = [];
const taskList = document.getElementById('taskList') as HTMLUListElement;
const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;

function addTask() {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        displayTasks();
        saveTasksToLocalStorage();
        taskInput.value = ''; 
    }
}

function displayTasks() {
    taskList.innerHTML = ''; 

    tasks.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}

loadTasksFromLocalStorage();
addTaskButton.addEventListener('click', addTask);

