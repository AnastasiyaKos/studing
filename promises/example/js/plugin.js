let post;
let comments;
let id = 2;

ajax.send({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    success: function (res) {
        //console.log(res);
        post = JSON.parse(res);

        ajax.send({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
            success: function (res) {
                //console.log(res);
                comments = JSON.parse(res);
                // вовыодим комменты на страницу
            }
        })
    },
    error: function (err) {
        console.log(err);
    }
});

// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('First step');
//     }, 2000);
// });

// promise1
//     .then(data => {
//         console.log(data);
//         return 'some new info'
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });


function promise1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('First step');
            resolve('First step');
        }, 2000);
    })
}

function promise2(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(data, 'Seconds step');
            reject('Error on seconds step');
        }, 2000);
    })
}

function promise3(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(data, 'Third step');
            resolve('Third step');
        }, 2000);
    })
}

promise1()
    .then(promise2)
    .then(promise3)
    .catch(err => {
        console.log(err);
    })






