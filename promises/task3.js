
fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let ul = document.querySelector('ul');

        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            let text = data[i].id + ' ' + data[i].title;

            li.innerHTML = text;
            ul.appendChild(li);
        }

    });


