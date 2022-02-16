const mainBtn = document.querySelector('.random-jokes__btn');
const mainImg = document.querySelector('.main__img');
const randomText = document.querySelector('.random__text');
const langBtns = document.querySelector('.header__lang');
const langEnBtn = document.querySelector('.header__lang-en');
const headTitle = document.querySelector('h1');


let randomNum = function(min, max) {
    let resultNum = min + Math.random() * (max + 1 - min);
    return Math.floor(resultNum);
}

const audio = new Audio();
const audioPlayer = function () {
    audio.src = `./assets/audio/track-${randomNum(1,5)}.mp3`;
    audio.currentTime = 0;
    audio.play();
}

const changeLang = function (id) {
    if (id == 'langRu') {
        headTitle.innerText = 'Случайные цитаты';
        mainBtn.innerText = 'Нажми и вращай'
    } else if (id == 'langEn') {
        headTitle.innerText = 'Random quotes';
        mainBtn.innerText = 'Tap and spin';
    }
}

const dataEng = 'https://type.fit/api/quotes';
const dataRu = './assets/json/quotes.json';

async function getData(id) {
    let url = id == 'langRu' ? dataRu : dataEng;
    const res = await fetch(url);
    const data = await res.json();
    let newText = data[randomNum(0,data.length-1)].text;
    randomText.innerText = newText;
}

langBtns.addEventListener('click', (event) => {
    let arr = event.path[1].children;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].classList.contains('active')){
            arr[i].classList.remove('active')
        }
    }
    localStorage.setItem('lang',event.target.id);
    event.target.classList.add('active');
    changeLang(event.target.id);
    getData(event.target.id);
})

mainBtn.addEventListener('click',(e) => {
    mainImg.classList.add('active');
    audioPlayer();
    getData(localStorage.getItem('lang'));
    setTimeout(() => {
        mainImg.classList.remove('active');
        mainImg.src = `./assets/img/jokes-${randomNum(1,11)}.jpg`;
    },900)
})

window.addEventListener('load', () => {
    let langOpt = localStorage.getItem('lang');
    getData(langOpt);
    changeLang(langOpt)
})


