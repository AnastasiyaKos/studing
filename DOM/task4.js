document.addEventListener('DOMContentLoaded', function () {

    let ul = document.querySelector('ul');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    li4.className = 'new-item';
    li5.className = 'new-item';

    li4.textContent = 'item 4';
    li5.textContent = 'item 5';

    ul.appendChild(li4);
    ul.appendChild(li5);

    //console.log(ul);


    function appendStrong() {
        let ul = document.querySelector('ul');
        let link = document.links;
        let strong = document.createElement('strong');

        for (let i = 0; i < link.length; i++) {
            if (ul.contains(link[i])) {
                link[i].insertAdjacentElement('afterbegin', strong);
            }
            //console.log(link[i]);
        }
        return link;
    }
    //console.log(appendStrong());


    let body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', '<img src="" alt="ты лох">');
    let img = document.body.firstChild;

    //console.log(img);


    let mark = document.querySelector('mark');
    mark.className = 'green';
    mark.insertAdjacentHTML('beforeend', ' green');

    //console.log(mark);

    let li = document.querySelectorAll('li');
    let text = [];

    for (let i = 0; i < li.length; i++) {
        text.push(li[i].textContent);

    }

    function sortLi (prev, next) {
        if (prev > next) return -1;
        if (prev < next) return 1;
    }


    text.sort(sortLi);

    for (let k = 0; k < li.length; k++) {
        li[k].textContent = text[k];
    }

    console.log(li)
 });