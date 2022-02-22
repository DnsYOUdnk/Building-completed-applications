const areaGame = document.querySelector('#game__area');
let editMove = 0;


areaGame.addEventListener('click', (event) => {
    if(event.target.className == 'area__cell') {
        editMove%2 == 0 ? event.target.innerText = 'X' : event.target.innerText = '0'; 
    }
    editMove++;
})