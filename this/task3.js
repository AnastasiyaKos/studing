/*
Внести в код такие изменения, чтобы можно было вызвать
user.getName() и получить 'Abraham':

const user = { name: 'Abraham'},
      getUserName = function () {...};
 */

const user = {
    name: 'Abraham',
    getName: function () {
        return this.name
    }
};

console.log(user.getName());