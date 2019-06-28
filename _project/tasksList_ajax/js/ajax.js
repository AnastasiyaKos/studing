// модуль универсальных запросов

// settings = {
//      method: 'GET/POST...',
//      url: 'https://...',
//      data: 'some info',
//      timeout: 3000,
//      success: function on success - отрабатывает при успошного взаимодействия с сервером
//      error: function on error - срабатывает если произошла ошибка
// };

const ajax = (function () {
    
    function send(settings) {

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('error', function (e) {
            settings.error({
                errorText: xhr.responseText,
                code: xhr.status
            });
        });

        xhr.addEventListener('load', function (e) {
            settings.success(xhr.responseText);
        });
        
        xhr.addEventListener('timeout', function (e) {
            // some action on timeout
        });

        xhr.open(settings.method, settings.url);

        xhr.timeout = settings.timeout || 3000;

        if (settings.headers) {
            for (let headerName in settings.headers) {
                console.log(headerName);
                xhr.setRequestHeader(headerName, settings.headers[headerName])
            }
        }

        xhr.send(settings.data); // если данных нет, то просто проигнорируется

    }

    return {
        send: send
    }

})();