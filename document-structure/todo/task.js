const wordInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

wordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addWord();
    }
});

addButton.addEventListener('click', addWord);

function addWord() {
    const word = wordInput.value.trim();
    if (word !== '') {
        const task = document.createElement('div');
        task.classList.add('task');

        const title = document.createElement('div');
        title.classList.add('task__title');
        title.textContent = word;

        const deleteButton = document.createElement('span');
        deleteButton.classList.add('task__delete');
        deleteButton.textContent = '#';
        deleteButton.addEventListener('click', function() {
            task.remove();
        });

        task.appendChild(title);
        task.appendChild(deleteButton);
        taskList.appendChild(task);

        wordInput.value = '';
        wordInput.focus();
    }
}

