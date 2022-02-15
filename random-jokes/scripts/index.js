const mainBtn = document.querySelector('.random-jokes__btn');
const mainImg = document.querySelector('.main__img');
const randomText = document.querySelector('.random__text');

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

mainBtn.addEventListener('click',(e) => {
    mainImg.classList.add('active');
    audioPlayer();
    getData();
    setTimeout(() => {
        mainImg.classList.remove('active');
        mainImg.src = `./assets/img/jokes-${randomNum(1,11)}.jpg`;
    },900)
})

async function getData() {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    let newText = data[randomNum(0,data.length-1)].text;
    randomText.innerText = newText;
}

window.addEventListener('load', getData())


console.log('Прошу прощения за грязную работу, накидал все это дело в дикой в спешке...Не судите строго или судите дело ваше, в общем надеюсь что кто-то угорнет. А вообще ребята если вы разобрались в теме с API напишите подробнее все норм я сделал или это какая-то дичь. Спасибо большое')