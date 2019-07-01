function promiseCreator(time, value) {
    return new Promise( function(resolve, reject) {
        setTimeout(function() {
            resolve(value);
        }, time)
    })
}

const prom = promiseCreator(500, '0k');
prom.then(console.log);