/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
 */

camelize = (str) => {
   for ( let i = 0; i < str.length; i++ ) {
       let index = str.indexOf('-');
       
   }
};
