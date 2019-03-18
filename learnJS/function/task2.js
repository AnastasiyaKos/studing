function makeBuffer() {
    let string = '';
    return (value) => {
        if (value) {
            return string += value;
        }
        return string;
    }
}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer(5);
buffer(6);

// получить текущее значение
console.log( buffer() );