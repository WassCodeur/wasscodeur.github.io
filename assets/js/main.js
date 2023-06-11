let btnmenu_burger = document.querySelector('.btn-menu-burger');
let nav_list = document.querySelector('.nav_menu_bergur');
let detel = document.querySelector('.detel')
let social = document.querySelector('.social')
function openmenu() {
    // if (nav_list.style.display == 'none') {
    // }
    if (nav_list.style.display === 'none') {
        nav_list.style.display = 'block';
        btnmenu_burger.textContent = 'X';
        detel.style.display = 'none'
        social.style.display = 'none'
    }
    else {
        nav_list.style.display = 'none';
        btnmenu_burger.textContent = '☰';
        detel.style.display = 'block';
        social.style.display = 'block';
    }
}