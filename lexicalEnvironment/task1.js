function test() {
    let name = 'Vasiliy';
    return getBigName(userName);
}

function getBigName(name) {
    name += '';
    return name.toUpperCase();
}

let userName = 'Ivan';

console.log(test());