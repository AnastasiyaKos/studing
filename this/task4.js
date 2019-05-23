/*
Создать объует, у которого будет высота и метод "увеличить высоту на один".
Метод должен возращать новую высоту:
object.height = 10;
object.inc();
object.height = 11;
 */


const object = {
    width: 15,
    height: 10,
    getHeightIncrease: function () {
        return ++this.height;
    }
};

console.log(object.height);
object.getHeightIncrease();
console.log(object.height);