function getPrice () {

    //console.log(`Этот товар ${this.price}`);
    return `Этот товар ${this.price}`
}

let intel = {
    name: 'Intel i7 3.5Ghz',
    price: 100,
    discount: 10,
    count: 50,
    getPrice: getPrice
};

let amd = {
    name: 'AMD A8 3.5Ghz',
    price: 75,
    discount: 10,
    count: 50,
    // getPrice: getPrice,
    // calcTotalPrice: function () {
    //     this.totalPrice = this.count * this.price;
    //     return this;
    // },
    // getTotalPrice: function () {
    //     return this.totalPrice;
    };
//привязали функцию к определенному объекту навсегда
intel.getPrice = getPrice.bind(intel);
//привязали его к amd, причем свойста (цена) тоже из intel
amd.getPrice = intel.getPrice;

setTimeout(() => {
    intel.getPrice();
}, 1000);

//intel.getPrice();
//вызываем функцию у объекта amd и добавляем $
// getPrice.call(amd, '$');
// getPrice.apply(amd, ['$', 'price'])


// LexicalEnvironment0
// {
//    name: 'Nastya',
//    getName: ...,
//    scope: null
// }
//


let name = 'Nastya';

function getName(name) {
    // LexicalEnvironment1
    // {
    //    name: 'Nastya',
    //    text: 'My name is ',
    //    args: arguments,
    //    getFullName: function body,
    //    scope: LexicalEnvironment0
    // }

    let text = 'My name is ';

    function getFullName(secondName) {
        // LexicalEnvironment2
        // {
        //    secondName: 'Kosukha',
        //    args: arguments,
        //    scope: LexicalEnvironment1
        // }

        return name + ' ' + secondName;
    }

    return text + getFullName('Kosukha');
}

//getName(name);






function makeCounter() {
    // LexicalEnvironment1
    // {
    //    counter: 0,
    //    args: arguments,
    //    scope: LexicalEnvironment0
    // }
    let counter = 0;

    return function () {
        // LexicalEnvironment2
        // {
        //    args: arguments,
        //    scope: LexicalEnvironment1
        // }
        return ++counter;
    }
}

let counterState = makeCounter();

//let counterState = function () {
//      return ++counter;
//};

//counterState();

let module = (function () {
    
    let counter = 0;
    
    function setCounter() {
        counter  = value;
    }

    function plusCounter() {
        counter++;
    }

    function getCounter() {
        return counter;
    }

    function reset() {
        counter = 0;
    }

    return {
        setCounter,
        getCounter,
        plusCounter,
        reset
    }
    
})();









