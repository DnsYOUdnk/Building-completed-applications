console.log(`Отметка за portfolio#1 - 100 баллов.`)

// Реализация адаптивного меню

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

console.log(`Отметка за portfolio#2 - 75 баллов.`)

// Реализация функциональности сайта

const portfolioParentBtns = document.querySelector('.portfolio__buttons'),
      portfolioBtns = document.querySelectorAll('.portfolio__btn'),
      portfolioImages = document.querySelectorAll('.portfolio__image');

      portfolioParentBtns.addEventListener('click', (event) => {
          console.log(event)
        if(event.target.classList.contains('portfolio__btn')) {
            portfolioBtns.forEach(item => item.classList.remove('active'))
            event.target.classList.add('active')
            portfolioImages.forEach((img, index) => img.src =`./assets/img/${event.target.dataset.period}/${index+1}.jpg`);
        }
      })

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages(seasons) {
    seasons.forEach(item => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${item}/${i}.jpg`;
          }
    })
  }
  preloadImages(seasons);

