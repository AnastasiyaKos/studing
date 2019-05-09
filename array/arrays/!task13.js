/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
 */

camelize = (str) => {
   const words = str.split('-');
   const resultWords = words.map((word, index) => {
       if (index === 0) {
           return word;
       }
       let resultWorld = '';
       for ( let i = 0; i < word.length; i++ ) {
           if ( i === 0 ) {
               resultWorld += word[i].toUpperCase()
           } else {
               resultWorld += word[i];
           }
       }
       return resultWorld;
   });
    return resultWords.join('');
};

console.log(camelize('background-color'));

camelize2 = (str) => {
    return str.split('-').map((word, index) => {
        if (index === 0) {
            return word;
        }
        let resultWorld = '';
        for ( let i = 0; i < word.length; i++ ) {
            if ( i === 0 ) {
                resultWorld += word[i].toUpperCase()
            } else {
                resultWorld += word[i];
            }

        }
        return resultWorld;
    }).join('')
};
console.log(camelize2('background-color'));