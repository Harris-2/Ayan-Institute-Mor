function addTask() {
    const taskText = document.getElementById('todoInput').value;
    if(taskText === '') {
        alert('Please enter a task. ');
        return;
    }

    const taskList = document.getElementById('todoList');

    const newTask = document.createElement('li');

    newTask.innerText = taskText;

    newTask.addEventListener('click', toggleComplete);

    const removeButton = document.createElement('span');

    removeButton.innerText = '❌';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', removeTask);

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);

    document.getElementById('todoInput').value = '';
}

function toggleComplete(event) {
    event.target.classList.toggle('completed');
}

function removeTask(event) {
    event.stopPropagation();
    const task = event.target.parentElement;
    task.remove();
}