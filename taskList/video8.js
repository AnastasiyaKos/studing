let tasks = [
    "Выучить JS",
    "Выучить Angular 4",
    "Сходить на работу"
];
let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];

function listTemplate(task) {
    //Create list item
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center';

    //Create tag i fa-trash-alt
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-auto';

    //Append delete icon to li
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {

    clearList();

    for ( let i = 0; i < tasksArray.length; i++ ) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }

    //setDeleteEvent(); //перебираем события

}

function addList(list) {
    tasks.unshift(list);
    //generateList(tasks);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
};

//функция которая заново добавляет сщбытия через цикл
// function setDeleteEvent() {
//     for (let i = 0; i < deleteBtns.length; i++) {
//         deleteBtns[i].addEventListener('click', function (e) {
//             console.log('click');
//         });
//     }
// }

function deleteListItem (target) {
    //Delete list item
    // 1. найти родителя
    // 2. удалили родителя
    // 3. splice, index, indexOf, text
    let parent = target.closest('li'); //нашли родителя
    let text = parent.textContent; //забрали у него текст
    let index = tasks.indexOf(text); //находим индекс нужного текста

    //можем сократить
    //let parent = e.target.closest('li');
    //let index = tasks.indexOf(parent.textContent);

    tasks.splice(index, 1);
    parent.remove(); //удаляем найденную li
}

ul.addEventListener('click', function (e) {
    if ( e.target.classList.contains('delete-item') ) {
        deleteListItem(e.target);
    }
});


//событие отправки формы
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if ( !inputText.value ) {
        //show error
        inputText.classList.add('is-invalid')
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

inputText.addEventListener('change', function (e) {
    console.log(this.value)
});


generateList(tasks);


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



