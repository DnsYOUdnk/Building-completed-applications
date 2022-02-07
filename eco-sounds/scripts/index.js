let headerElemnts = document.querySelector('.header__wrapper'),
    headerBtns = document.querySelectorAll('.header__btn'),
    blockMain = document.querySelector('.main');

let playAudio = false;

const audio = new Audio();
const audioPlayer = function (filePath) {
    audio.src = `./assets/audio/${filePath}.mp3`;
    audio.currentTime = 0;
    if(playAudio) {
        audio.play();
    } else {
        audio.pause()
    }
}


headerElemnts.addEventListener('click', event => {
    if(event.target.classList.contains('header__btn')) {
        headerBtns.forEach(item => item.classList.remove('active'))
        event.target.classList.add('active');
        blockMain.style.backgroundImage = `url(./assets/img/${event.target.id}.jpg)`;
        audioPlayer(event.target.id);
        playAudio = true;
    }
})