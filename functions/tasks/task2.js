/* создать функцию, которая принимает строку и
возвращает строку-перевертыш:
reverseString('test')="tset"
*/
function reverseString(string) {
   let result = '';
   for (let i = 1; i <= string.length; i++) {
      result += string[string.length - i];
   }

      return result;
}
console.log(reverseString('kotik'));