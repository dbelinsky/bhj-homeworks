const inputTask = document.getElementById('task__input');
const addTask = document.querySelector('.tasks__add');
const taskList = document.querySelector('.tasks__list');
const taksRemove = document.querySelector('.task__remove');
let taskStorageKey = 'tasks';

const addTaskToLocalStorage = () => {
    const tasks = [];
    taskList.querySelectorAll('.task').forEach((taskItem) => {
        const taskItemTitle = taskItem.querySelector('.task__title').textContent.trim();
        tasks.push(taskItemTitle);
    })
    const tasksJson = JSON.stringify(tasks);
    window.localStorage.setItem(taskStorageKey, tasksJson);
};


window.addEventListener('load', function() {
    const savedTasks = window.localStorage.getItem(taskStorageKey);
    console.log(savedTasks);
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        for (const task of tasks) {
            taskList.innerHTML += `
                <div class="task">
                    <div class="task__title">
                        ${task}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
            `;
        }
    }
});


addTask.addEventListener('click', function(event) {
    event.preventDefault();
    if(inputTask.value.trim() === '') {
        return;
    }
    taskList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${inputTask.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;
    inputTask.value = '';
    addTaskToLocalStorage();
});


inputTask.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && inputTask.value.trim() !== '') {
        taskList.innerHTML += `
            <div class="task">
                <div class="task__title">
                    ${inputTask.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        inputTask.value = '';
        addTaskToLocalStorage();
    }
});


taskList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        const taskTargetItem = target.closest('.task');
        taskTargetItem.remove();
        addTaskToLocalStorage();
    }
});