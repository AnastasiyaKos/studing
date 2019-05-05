document.addEventListener('DOMContentLoaded', function () {

    function isParent(parent, child) {
        return parent !== child && parent.contains(child);
    }

    //isParent(document.body.children[0], document.querySelector('body'));

    function getLink() {
        let href = document.links;
        let ul = document.getElementById('ulList');
        let array = [];

        for (let i = 0; i < href.length; i++) {
            if (!ul.contains(href[i])) {
                array.push(href[i])
            }
        }

        return array;

    }
    //console.log(getLink());
    
    function getNeighbourhood() {
        let elem = document.getElementById('ulList');
        let prev = elem.previousElementSibling;
        let next = elem.nextSibling;


        return {
            prev: prev,
            next
        };
    }
    //console.log(getNeighbourhood());
    
    function getAmountOfLi() {
        return document.querySelectorAll('li').length;
    }
    //console.log(getAmountOfLi())

});


