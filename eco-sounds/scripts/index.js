let headerElemnt = document.querySelector('.header__wrapper'),
    headerBtns = document.querySelectorAll('.header__btn');


    headerElemnt.addEventListener('click', event => {
        if(event.target.classList.contains('header__btn')) {
            headerBtns.forEach(item => item.classList.remove('active'))
            event.target.classList.add('active')
        }
    })