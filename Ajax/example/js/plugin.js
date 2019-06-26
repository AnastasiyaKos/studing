//AJAX
//FETCH
//Socket


// url - ссылка
// request / req - запрос к серверу
// response / res - ответ от сервера
// methods;
// get / GET - получение данных от сервера
// post / POST - передаем данные серверу
// put - обновление данных на сервере(в зависимости от сервера можно делать и через post)
// delete - удаление данных на сервере
// Headers - заголовки, которые отправляет браузер (доп. инфа для сервера, откуда идет запрос, что, куда)


// КЛАСС, котроый хранит все методы для работы с AJAX
// const xhr = new XMLHttpRequest();

// старый вариант проверки текущего состояния объекта (1, 2, 3, 4)
// xhr.addEventListener('readystatechange', function (e) {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         console.log(xhr.readyState);
//     }
// });

// современный вариант (получение данных при успешной загрузке
// xhr.addEventListener('load', function (e) {
    // console.log(xhr.responseText);
    // xhr.status - статус код 200, 404 и тд
    // xhr.statusText = текст ответа 'ok', 'not found'
// });

// для отслеживания ошибок
// xhr.addEventListener('error', function (e) {
//     console.log(xhr.responseText);
// });

// если время ожидания превышено
// xhr.addEventListener('timeout', function (e) {
    // console.log('timeout');
// });

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// время, котрое мы готовы ждать ответ от сервера
// xhr.timeout = 3000;

// установка заголовка
// xhr.setRequestHeader('Content-type', 'application/json');

// метод для получения определенного заголовка
// xhr.getResponseHeader('Content-type');
// метод для получения всех заголовков
// xhr.getAllResponseHeaders();


// xhr.send();


// post all posts
ajax.send({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: function (res) {
        let response = JSON.parse(res);
        console.log(response);
    },
    error: function (err) {
        console.log(err);
    }
});

ajax.send({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    success: function (res) {
        let response = JSON.parse(res);
        console.log(response);
    },
    error: function (err) {
        console.log(err);
    }
});








