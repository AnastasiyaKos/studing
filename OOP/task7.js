class User {
    constructor(name) {
        this.name = name;
        this.dateOfRegistration = new Date();
    }

    getInfo() {
        return {
            name: this.name,
            dateOfRegistration: this.dateOfRegistration
        }
    }
}

class Admin extends User {
    constructor(name, superAdmin) {
        super(name);
        this.getAdmin = () => superAdmin;
    }

    getInfo() {
        return {
            ...super.getInfo(),
            superAdmin: this.getAdmin()
        }
    }
}

class Guest extends User {
    constructor(name) {
        super(name);

        this.getValidDate = () => new Date(new Date().setDate(this.dateOfRegistration.getDate() + 3));
    }

    getInfo() {
        return {
            ...super.getInfo(),
            validDate: this.getValidDate()
        }
    }
}

const admin1 = new Admin('Loh', false);
console.log(admin1.getInfo());

const guest1 = new Guest('Loh2');
console.log(guest1.getInfo());