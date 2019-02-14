/* создать функцию, которая принимает строку и
возвращает строку-перевертыш:
reverseString('test')="tset"
*/
exports.reverseString = function reverseString(string) {
   let result = '';
   for (let i = 1; i <= string.length; i++) {
      result += string[string.length - i];
   }

      return result;
};