const mainBtn = document.querySelector('.random-jokes__btn');
const mainImg = document.querySelector('.main__img')

let randomNum = function(min, max) {
    let resultNum = min + Math.random() * (max + 1 - min);
    return Math.floor(resultNum);
}

mainBtn.addEventListener('click',(e) => {
    mainImg.classList.add('active');
    setTimeout(() => {
        mainImg.classList.remove('active');
        mainImg.src = `./assets/img/jokes-${randomNum(1,11)}.jpg`
    },900)
    
    

})