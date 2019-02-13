/* с помощью рекурсии вычислить факториал числа 10:
factorial(10) = 3628800
 */

exports.factorial = function factorial(x) {
    if (x === 1) {
        return 1;
    }
    return x * factorial(x-1);
};
