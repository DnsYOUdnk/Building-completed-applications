const areaGame = document.querySelector('#game__area');
const areaCells = document.querySelectorAll('.area__cell');
const restartBtn = document.querySelector('.pop_up__close__btn');
const popUpContent = document.querySelector('.pop_up__content');
const popUpwrapper = document.querySelector('#pop__up');
const winConfetti = document.querySelector('.confetti');
let editMove = 0;
let winner = '';


areaGame.addEventListener('mousedown', (event) => {
    if(event.target.className == 'area__cell') {
        editMove%2 == 0 ? event.target.innerText = 'X' : event.target.innerText = '0';
        event.target.classList.add('lock');
        event.target.removeAttribute("style"); 
        editMove++;
    }
    victoryCheck();
})
areaGame.addEventListener('mouseover', (event) => {
    if(event.target.className != 'area__cell lock' && !event.target.innerText) {
        editMove%2 == 0 ? event.target.innerText = 'X' : event.target.innerText = '0';
        event.target.style.color = 'rgba(0, 0, 0, 0.37)'; 
    }
})

areaGame.addEventListener('mouseout', (event) => {
    if(event.target.className != 'area__cell lock' && event.target.innerText) {
        editMove%2 == 0 ? event.target.innerText = '' : event.target.innerText = ''; 
    }
})

const victoryCheck = function() {

    const arrResult = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    arrResult.forEach(item => {
        if(areaCells[item[0]].innerText == 'X' && areaCells[item[1]].innerText == 'X' && areaCells[item[2]].innerText == 'X') {
            winner = 'X'
            getResult(winner, item)
        } else if(areaCells[item[0]].innerText == '0' && areaCells[item[1]].innerText == '0' && areaCells[item[2]].innerText == '0') {
            winner = '0'
            getResult(winner, item)
        }
    })

    if(editMove == 9) {
        winner = !winner ? 'ничья' : winner;
        getResult(winner, item)
    }

    if(!winner && editMove == 9) {
        winner = 'ничья'
    }
}

const getResult = function(winner, arr) {
    popUpwrapper.classList.add('active');
    winConfetti.classList.add('active');
    
    popUpContent.innerHTML = `<h3>В этой игре победил:</h3>
                                    <p>${winner}</p>
                            <p>Количество ходов в игре: ${editMove} </p>`;
}

restartBtn.addEventListener('click', () => {
    popUpwrapper.classList.remove('active');
    winConfetti.classList.remove('active');
    editMove = 0;
    winner = '';
    areaCells.forEach(item => {
        item.innerText = '';
        item.classList.remove('lock') 
    })
})