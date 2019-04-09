const user = {};

function User(fullName) {
    this.fullName = fullName;


Object.defineProperties(user, {
    get fullName() {
        return this.firstName + this.lastName;
    },

    set fullName(value) {
        const split = value.split('');
        this.firstName = split[0];
        this.lastName = split[1];
    }

})};

let vasya = new User ('Vasiliy Popkin');

alert( vasya.firstName );
alert( vasya.lastName );

vasya.lastName = 'Сидоров';

alert( vasya.fullName );