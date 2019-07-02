function promise1() {
    return fetch('https://jsonplaceholder.typicode.com/posts', {method:'GET'})
        .then(res => res.json())
}

function promise2() {
    return fetch('https://jsonplaceholder.typicode.com/users', {method:'GET'})
        .then(res => res.json())
}

Promise.all([promise1(), promise2()])
    .then(value => console.log(value));