class MyString {
    constructor (string) {
        this.string = string;
    }

    get str() {
        return this.string;
    }

    set str(string)  {
        this.string = string;
    }

    getLength() {
        return this.string.length;
    }

    toString() {
        return this.string;
    }

    valueOf() {
        return this.string.length;
    }
}

const string1 = new MyString('i am loh');

console.log(string1.str);
console.log(string1.toString());
console.log(string1.getLength());
console.log(+string1);
