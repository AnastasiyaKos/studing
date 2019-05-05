document.addEventListener('DOMContentLoaded', function () {

    function getTextFromUl() {
        let href = document.links;
        let ul = document.getElementById('ulList');
        let arrayText = [];

        for (let i = 0; i < href.length; i++) {
            if (ul.contains(href[i])) {
                arrayText.push(href[i].innerHTML)
            }
        }

        return arrayText;
    }
    //console.log(getTextFromUl());


    let paragraph = document.getElementById('paragraphValue');
    let childNodes = paragraph.childNodes;
    //console.log(childNodes);

    for (let i = 0; i < childNodes.length; i++) {

        if (childNodes[i].nodeType = 3) {
            childNodes[i].data = '-text-';
        }
    }
    //console.log(paragraph);


    function info(element) {
        let children = element.childNodes;
        let number = '';
        for (let i = 0; i < children.length; i++ ) {
            if (element.childNodes.length = 0) {
                number = 0;
            } else {
                number = element.childNodes.length;
            }
        }
        return {
            type: element.nodeType,
            children: number,
            name: element.nodeName
        };
    }
    console.log(info(document.getElementById('ulList')))
});

