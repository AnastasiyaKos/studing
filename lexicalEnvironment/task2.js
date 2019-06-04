let food = 'cucumber';

(function () {
    let food = 'bread';
    getFood();
})();

function getFood() {
    console.log(food);
}