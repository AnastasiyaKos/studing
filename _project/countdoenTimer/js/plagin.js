        /*ПРОДОЛЖЕНИЕ ВИДЕО 16 НА 18:00 МИНУТАХ*/

//timer
let buttons = document.querySelectorAll('[data-time]');

const timer = (function () {
        
    let coundown,
        timerDisplay, // отображение время
        endTime; // отображается конечное время
        //alarmSound;

    function init(settings) {
        // отвечает за инициализацию таймера/модуля, принимает настройки
        //console.log(settings);
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);

        // if (settings.alarmSound) {
        //     alarmSound = new Audio(settings.alarmSound);
        // }
    }
    
    function start(seconds) {
        // принимает время, запускает таймер

        if (!timerDisplay || !endTime) return console.log('Please init module first.');
        if (!seconds || typeof seconds !== 'number') return console.log('Please provide seconds.');

        const now = Date.now();
        const then = now + seconds * 1000;

        displayEndTime(then);
    }
    
    function displayTimeLeft(seconds) {
        // принимает время, выводит время в нужном времени, подсчитывает интервал
    }
    
    function displayEndTime(timestamp) {
        // получает конечное время, подсчитывает и  выводит его в блоке endTime

        console.log (timestamp);
    }

    function stop() {
        // экстренная остановка
    }

    function playSound() {
        // проигрывает звук
    }

    return {
        init,
        start,
        stop
    }

}());

//init timer
timer.init({
    timeLeftSelector: 'display_time-left',
    timeEndSelector: 'display_end-time',
    //alarmSound: '/*файл к аудио*/'
});

//Start timer by click
function startTimer(e) {
    const second = parseInt(this.dataset.time);//get in number format
    timer.start(second);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));
    
    
    
