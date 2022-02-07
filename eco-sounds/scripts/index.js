let headerElemnts = document.querySelector('.header__wrapper'),
    headerBtns = document.querySelectorAll('.header__btn'),
    blockMain = document.querySelector('.main');


    headerElemnts.addEventListener('click', event => {
        if(event.target.classList.contains('header__btn')) {
            headerBtns.forEach(item => item.classList.remove('active'))
            event.target.classList.add('active');
            blockMain.style.backgroundImage = `url(./assets/img/${event.target.id}.jpg)`
            console.log(event.target.id)
        }
    })