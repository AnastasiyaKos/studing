const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
        return Number(this.height.slice(0, -2)) + Number(this.marginTop.slice(0, -2)) + Number(this.marginBottom.slice(0, -2));
    }
};

console.log(element.getFullHeight());