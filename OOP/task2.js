// class Encryption {
//     constructor () {
//         let string = '';
// }
//
//     getString() {
//         return this.string;
// }
//
//     // getInvertedString() {
//     //     return this._string.split('').reverse().join('');
//     // }
//
//     deleteString() {
//         delete this._string;
//     }
// }
//
// const str1 = new Encryption('Hello');
// srt1.
//
// console.log(str1.getInvertedString());
// console.log(str1.getString());
// console.log(str1._string);


function Encryption(string) {
    this.string = string;
}

Encryption.prototype.getString = function () {
    return `${this.string}`;
};

Encryption.prototype.getInvertedString = function () {
    return `${this.string.split('').reverse().join('')}`;
};

Encryption.prototype.deleteString = function () {
    delete `${this.string}`;
};

const str1 = new Encryption('Hello');

console.log(str1.getInvertedString());
console.log(str1.getString());
console.log(str1.string);