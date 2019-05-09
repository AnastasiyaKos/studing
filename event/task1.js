document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn-msg');
    const body = document.getElementById('body');
    const strong = document.getElementById('tag');
    const ul = document.getElementById('ul');
    const btnGen = document.getElementById('btn-generate');

    btn.addEventListener('click', function (e) {
        alert(e.target.innerHTML);
    });

    btn.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = '#FF0000';
        e.preventDefault();
    });

    btn.addEventListener('mouseout', function (e) {
        e.target.style.backgroundColor = '#a19c97';
    });

    body.addEventListener('click', function (e) {
        console.log(strong + e.target.nodeName)
    });

    ul.addEventListener('customClick', function(event) {
        const ul = event.target;
        const li = document.createElement('li');
        li.innerText = `Item ${event.detail.counter}`;
        ul.appendChild(li);
        event.detail.counter++;
    });

    const event = new CustomEvent('customClick', {
        detail: { counter: 3 }
    });

    btnGen.addEventListener('click', () => {
       ul.dispatchEvent(event);
    });

});