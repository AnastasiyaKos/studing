 makeBuffer = () => {
    let string = '';
    const buffer = (value) => {
        if (value) {
            return string += value;
        }
        return string;
    };

    buffer.clear = () => {
        string = '';
    };

    return buffer;
};

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer(5);

// получить текущее значение
console.log( buffer() );

buffer.clear();
console.log(buffer());