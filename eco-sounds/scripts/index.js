let headerElemnts = document.querySelector('.header__wrapper'),
    headerBtns = document.querySelectorAll('.header__btn'),
    blockMain = document.querySelector('.main'),
    playBtn = document.querySelector('.audio__btn');
    
const audio = new Audio();

let isPlayAudio = false,
    filePath = 'forest';

const playAudioBtn = function () {
    if(isPlayAudio) {
        isPlayAudio = false
        audio.pause()
    } else {
        isPlayAudio = true
        audioPlayer();
    }
}

const audioPlayer = function () {
    audio.src = `./assets/audio/${filePath}.mp3`;
    audio.currentTime = 0;
    audio.play();
}

headerElemnts.addEventListener('click', event => {
    if(event.target.classList.contains('header__btn')) {
        headerBtns.forEach(item => item.classList.remove('active'))
        event.target.classList.add('active');
        isPlayAudio = true;
        filePath = event.target.id;
        audioPlayer();
        blockMain.style.backgroundImage = `url(./assets/img/${event.target.id}.jpg)`;
    }
})

playBtn.addEventListener('click', playAudioBtn)
