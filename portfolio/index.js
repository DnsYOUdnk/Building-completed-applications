console.log(`Отметка за portfolio#1 - 100 балла(ов).`)

const hamburger = document.querySelector('.header__btn-burger');
const navMenu = document.querySelector('.nav__items');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('openMenu');
        });

const navLinks = document.querySelectorAll('.nav__link');
        
        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', () => {
                hamburger.classList.toggle('open');
                navMenu.classList.toggle('openMenu');
            })
        })