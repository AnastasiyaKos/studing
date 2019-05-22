/* Создать объект, который описывает ширину и высоту прямоугольника, а также
   может посчитать площадь фигуры:
 */

const rectangle = {
    width: 10,
    height: 15,
    getSquare: function () {
        return this.width * this.height;
    }
};

//console.log(rectangle.getSquare());
