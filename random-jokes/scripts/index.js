const mainBtn = document.querySelector('.random-jokes__btn');
const mainImg = document.querySelector('.main__img');
const randomText = document.querySelector('.random__text');
let randText = '';

let randomNum = function(min, max) {
    let resultNum = min + Math.random() * (max + 1 - min);
    return Math.floor(resultNum);
}

mainBtn.addEventListener('click',(e) => {
    mainImg.classList.add('active');
    getData()
    randomText.innerText = randText;
    setTimeout(() => {
        mainImg.classList.remove('active');
        mainImg.src = `./assets/img/jokes-${randomNum(1,11)}.jpg`
    },900)
})

async function getData() {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    let newText = data[randomNum(0,data.length-1)].text;
    randText = newText;
}

getData()

function setLocalStorage() {
    localStorage.setItem('newText', randText);
  }
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
    if(localStorage.getItem('newText')) {
      const text = localStorage.getItem('newText');
      randomText.innerText = text;
    }
}
window.addEventListener('load', getLocalStorage)


console.log('Прошу прощения за грязную работу, накидал все это дело в дикой в спешке...Не судите строго или судите дело ваше, в общем надеюсь что кто-то угорнет. А вообще ребята если вы разобрались в теме с API напишите подробнее все норм я сделал или это какая-то дичь. Спасибо большое')