let menuListSub = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < menuListSub.length; i++) {
    if (menuListSub[i].closest('li').querySelector('ul')) {
        let element = menuListSub[i].closest('li').querySelector('a');
        element.addEventListener('click', showSubMenu);
    }
}

function showSubMenu(elem) {
    elem.preventDefault();
    console.log(this.closest('li').querySelector('ul'));
    this.closest('li').querySelector('ul').classList.toggle("menu_active");
}