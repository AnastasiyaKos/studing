document.addEventListener('DOMContentLoaded', function () {

    let ul = document.getElementById('listOfLinks');
    ul.className = 'list';

    //console.log(ul);


    let link = document.links;
    link.className = 'custom-link';

    //console.log(link);


    let nextElement = ul.nextElementSibling;
    while (true) {
        if (nextElement.tagName === 'A') {
            nextElement.setAttribute('id', 'link');
            break;
        }
        nextElement = nextElement.nextElementSibling;
        //console.log(nextElement);
    }


    let li = document.getElementsByTagName('li');
    console.log(li.length);
    for (let i = 0; i < li.length; i+=2) {
        li[i].className = 'item';
    }

    console.log(li);
});