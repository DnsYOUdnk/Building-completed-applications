const areaGame = document.querySelector('#game__area');
const areaCells = document.querySelectorAll('.area__cell');
const restartBtn = document.querySelector('.pop_up__close__btn');
const popUpContent = document.querySelector('.pop_up__content');
const popUpwrapper = document.querySelector('#pop__up');
let editMove = 0;
let winner = '';


areaGame.addEventListener('click', (event) => {
    if(event.target.className == 'area__cell' && !event.target.innerText) {
        editMove%2 == 0 ? event.target.innerText = 'X' : event.target.innerText = '0'; 
        editMove++;
    }
    victoryCheck();
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
            getResult('Победил: ' + winner)
        } else if(areaCells[item[0]].innerText == '0' && areaCells[item[1]].innerText == '0' && areaCells[item[2]].innerText == '0') {
            winner = '0'
            getResult('Победил: ' + winner)
        }
    })

    if(!winner && editMove == 9) {
        winner = 'ничья'
        getResult('Вышла: ' + winner)
    }
}

const getResult = function(winner) {
    popUpwrapper.classList.add('active')
    popUpContent.innerText = winner
    areaCells.forEach(item => {
        console.log(item.innerText = '')
    })
    console.log(winner)
}

window.addEventListener('load', alert('Ребята работа не сделана до конца, если не сложно проверьте завтра'))
