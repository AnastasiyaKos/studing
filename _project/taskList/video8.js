let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
ajax.send({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos',
    success: function (res) {
         tasks = JSON.parse(res);
        generateList(tasks);
        console.log(tasks);
    },
    error: function (err) {
        console.log(err);
    }
});

let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let btnClearList = document.getElementById('clearList');
let notificationAlert = document.querySelector('.notification-alert');

//модель задачи
// let models = {
//     id: '',
//     text: ''
// };



function generateId() {
    let id ='';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < 15; i++) {
        let position = Math.floor(Math.random() * words.length);
        id += words[position];
    }

    return id;
}



function listTemplate(task) {
    //Create list item
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.setAttribute('data-id', task.id);

    //записываем тескт в span, чтобы ожно было редактировать
    let span = document.createElement('span');
    span.textContent = task.title;
    if (task.completed) {
        span.className = 'bg-warning'
    }

    //Create tag i fa-trash-alt
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-4';
    //Create tag i fa-edit (редактирование задачи)
    let iEdit = document.createElement('i');
    iEdit.className = 'fas fa-edit edit-item ml-auto';

    //Append delete end edit icon to li
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
}

btnClearList.addEventListener('click', function (e) {
    ul.innerHTML = ''
});
function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {

    clearList();

    for (let i = 0; i < tasksArray.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }

    //setDeleteEvent(); //перебираем события

}

function addList(list) {
    let newTask = {
        id: generateId(),
        text: list
    };

    tasks.unshift(newTask);
    //generateList(tasks);
    ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
    //Add to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//функция которая заново добавляет сщбытия через цикл
// function setDeleteEvent() {
//     for (let i = 0; i < deleteBtns.length; i++) {
//         deleteBtns[i].addEventListener('click', function (e) {
//             console.log('click');
//         });
//     }
// }

function deleteListItem(id) {
    for (let i = 0; i < tasks.length; i++) {
        if ( tasks[i].id === id ) {
            tasks.splice(i, 1);
            break;
        }
    }

    // Update to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    message({
        text: 'Task delete success',
        cssClass: 'alert-warning',
        timeout: 4000
    })
}

function editListItem (id, newValue) {
    for (let i = 0; i < tasks.length; i++) {
        if ( tasks[i].id === id ) {
            tasks[i].text = newValue;
            break;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));

    message({
        text: 'Task update success',
        cssClass: 'alert-success',
        timeout: 4000
    })
}

function message (settings) {
    notificationAlert.classList.add(settings.cssClass);
    notificationAlert.textContent = settings.text;
    notificationAlert.classList.add('show');

    setTimeout(function () {
        notificationAlert.classList.remove('show');
    }, settings.timeout);

}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        let parent = e.target.closest('li');
        let id = parent.dataset.id;
        deleteListItem(id);
        parent.remove(); //удаляем найденную li


    } else if (e.target.classList.contains('edit-item')) {
        //toggle добавляет класс при его отсутствии или удаляет если присутствует
        e.target.classList.toggle('fa-save');
        let id = e.target.closest('li').dataset.id;

        // closest ищет брижайшего родителя
        let span = e.target.closest('li').querySelector('span');

        if (e.target.classList.contains('fa-save')) {
            // устанавливаем атрибут, позволяющий редактировать
            span.setAttribute('contenteditable', true);
            span.focus();

        } else {
            span.setAttribute('contenteditable', false);
            span.blur();
            editListItem(id, span.textContent);
        }
    }
});


//событие отправки формы
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //inputText.classList.remove('alert-success');
    if (!inputText.value) {
        //show error
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        form.reset()
    }

    // 1. get input text input.value
    // 2. addLit() ||
    //  =>  addList(inputText.value);

    // или insertAdjacentHTML
    //ul.insertAdjacentElement('afterbegin', listTemplate(inputText.value));
});

inputText.addEventListener('keyup', function (e) {
    if (inputText.value) {
        inputText.classList.remove('is-invalid');
    }
});




//КНОПКА Clear list
// let btn = document.getElementById('clearList');
//
// function onClick(e) {
//     console.log('click 1');
// };
//
// function onClick2(e) {
//     console.log('click 2');
// };
//
// btn.addEventListener("click", onClick);
// btn.addEventListener("click", onClick2);
//
// btn.removeEventListener('click', onClick2); //удалили событие, которое выполняет функция2
//
//
// console.dir(btn);
