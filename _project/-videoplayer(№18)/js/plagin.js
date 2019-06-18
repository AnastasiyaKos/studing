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
    }

    init() {
        // Stsrt init
        this.events();
    }

    events() {
        // All events
        //this.video.addEventListener('click',  this.togglePlay.bind(this))
        // при клике по видео оно играет/становится на паузу
        this.video.addEventListener('click',  e => this.togglePlay());
        // при клике на иконку ПЛЭЙ/ПАУЗА видео играет/становится на паузу
        this.toggle.addEventListener('click',  e => this.togglePlay());
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons(btn => btn.addEventListener('click', e => this.skip(e)));
    }

    togglePlay() {
        // Play/pause video
        // если видео на паузе, то при нажатии на него должно идти и наоборот
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '||' : '--';
        this.video[method]();
    }

    handleRangeUpdate(e) {
        console.log(e.target);
        // работа ползунков громкости / скорости
        // this.video['volume'] = e.target.value;
        // this.video['playBackRate'] = e.target.value;
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        // time skip (прокрутка времени)
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }
}

const video = new VideoPlayer();
video.init();
console.log(video);