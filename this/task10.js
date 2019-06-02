let element = {
    height: 25,
    getHeight: function () {
        return this.height
    }
};

let getElementHeight = element.getHeight.bind(element);

console.log(getElementHeight());