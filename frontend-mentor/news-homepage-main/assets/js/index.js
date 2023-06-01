const label = document.querySelector('.menu-label');
const input = document.querySelector('#menu');
const menu = document.querySelector('.menu-list');
const menuOptions = document.querySelectorAll('.menu-list li');

const menuOpen = () => {
    label.classList.remove('menu-closed');
    label.classList.add('menu-open');
    menu.classList.remove('menu-list-closed')
}
const menuClose = () => {
    label.classList.remove('menu-open');
    label.classList.add('menu-closed');
    menu.classList.add('menu-list-closed')
}


input.addEventListener('click', (e) => {
    if(e.target.checked){
        menuOpen();
    } else {
        menuClose();
    }
})


menuOptions.forEach(option => {
    option.addEventListener('click', e =>{
        menuClose();
        input.checked = false;
    });
});