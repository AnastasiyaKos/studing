/*Добавить методы в nodes конструктор:
- метод append(html) добавляет в конец содержимого узла html;
- метод prepend(html) добавляет в начало содержимого;
- метод before(html) вставляет html перед узлом;
- метод after(html) вставляет html после узла;
- метод html([value]) должен вернуть html-содержимое узла (innerHTML), если ни один аргумент не передан, и заменить содержимое на value, если функция вызвана с аргументом;
- метод getElement содержит переданный узел (метод должен вернуть узел DOM, переданный при инициализации конструктора).
*/

const Constructor = function () {
    this.addMethod = function(name, func) {
        this[name] = func;
    }
};

let nodes = new Constructor;

// nodes.addMethod('html', function (tag) {
//     let value = tag.innerHTML;
// });

nodes.addMethod('append', function (tag, html) {
    tag.insertAdjacentHTML('beforeend',html)
});

nodes.addMethod('prepend', function (tag, html) {
    tag.insertAdjacentHTML('afterbegin',html)
});

nodes.addMethod('before', function (tag, html) {
    tag.insertAdjacentHTML('beforebegin',html)
});

nodes.addMethod('after', function (tag, html) {
    tag.insertAdjacentHTML('beforebegin',html)
});

console.log(nodes.append());

