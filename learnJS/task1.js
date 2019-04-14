var user = {
    name: 'Василий',

    sayHi: function() {
        showName(this); // передать текущий объект в showName
    }
};

function showName(namedObj) {
    console.log( namedObj.name );
}

user.sayHi(); // Василий
