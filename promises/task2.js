class Prom {

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.rej = reject;
            this.res = resolve;
        });
    }

    reject(data) {
        this.rej(data)
    }
    resolve(data) {
        this.res(data)
    }

}

const inst = new Prom();

inst.promise
    .then(data => console.log('then', data))
    .catch(data => console.log('catch', data));

inst.resolve('qqq');