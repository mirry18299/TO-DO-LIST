const taskInput = document.getElementById('task-input');

const addTaskBtn = document.getElementById('add-task-btn');

const taskList = document.getElementById('task-list');

const clearAllTaskBtn = document.getElementById('clear-task-btn');

 addTaskBtn.addEventListener('click', function() {
    let taskText = taskInput.Value;
    if (taskText.trim() !=='') {

   const taskItem = document.createElement("li")

    taskList.appendChild(taskItem);

    taskItem.classList.add("task-item");

    taskItem.Innertext = taskText;

    const clearTaskBtn = document.createElement("i");

 clearTaskBtn.classList.add('fa-solid','fa-rectangle-xmark');
    taskItem.appendChild(clearTaskBtn);
    
    clearTaskBtn.addEventListener("click", function() {
        taskItem.remove();
    }
);

taskInput.value = "";
    }
});