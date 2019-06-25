class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress_filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        // ranges - это ползунки
        this.ranges = this.player.querySelectorAll('.player_slider');
        this.mouseDown = false;
    }

    init() {
        // Stsrt init
        this.events();
    }

    events() {
        // All events
        //this.video.addEventListener('click',  this.togglePlay.bind(this))
        // при клике по видео оно играет/становится на паузу
        this.video.addEventListener('click',  e => this.togglePlay(e));
        // при клике на иконку ПЛЭЙ/ПАУЗА видео играет/становится на паузу
        this.video.addEventListener('timeupdate', e => this.handleProgress(e));
        this.toggle.addEventListener('click',  e => this.togglePlay(e));
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons(btn => btn.addEventListener('click', e => this.skip(e)));
        this.progress.addEventListener('click', e => this.scrub(e));
        this.progress.addEventListener('mousemove', e => this.mouseDown && this.scrub(e));
        this.progress.addEventListener('mousedown', () => this.mouseDown = true);
        this.progress.addEventListener('mouseup', () => this.mouseDown = false);

    }

    togglePlay(e) {
        // Play/pause video
        // если видео на паузе, то при нажатии на него должно идти и наоборот
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '||' : '||';
        this.video[method]();
    }

    handleRangeUpdate(e) {
        //console.log(e.target);
        // работа ползунков громкости / скорости
        // this.video['volume'] = e.target.value;
        // this.video['playBackRate'] = e.target.value;
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        // time skip (прокрутка времени)
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }

    handleProgress(e) {
        // duration хранит инфу о том, сколько по времени длится видео
        const percent = (this.video.currentTime / this.video.duration);
        this.progress.style.flexBasis = `${percent}%`;
    }

    scrub(e) {
        //if (this.mouseDown) {
            //перемотка видео в то место, куда нажали на линии проигрывания
            console.log(e.offsetX, this.progress.offsetWidth);
            //переопределяем прогресс просмотра видео в то место, на котором остановились
            this.video.currentTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
        //}
    }
}

const video = new VideoPlayer();
video.init();
console.log(video);