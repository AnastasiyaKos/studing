function promise1() {
    fetch('https://jsonplaceholder.typicode.com/posts', {method:'GET'})
        .then(res => res.json())
        .then((data) => console.log(data.length));
}

function promise2() {
    fetch('https://jsonplaceholder.typicode.com/users', {method:'GET'})
        .then(res => res.json())
        .then((data) => console.log(data.length));
}

Promise.all([promise1(), promise2()]);
    //.then(value => console.log(value));