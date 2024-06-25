document.addEventListener('DOMContentLoaded', (event) => {
    const MenuButton = document.getElementById('menubtn');
    const sidemenu = document.getElementById("sidenav").style.width = "0px";
    const main = document.getElementById("main").style.marginLeft = "0px";


    MenuButton.addEventListener('click', () => {
        if (MenuButton.textContent === 'Menu') {
            sidemenu.style.width = "250px";
            main.style.marginLeft = "250px"
            MenuButton.textContent = 'Close';
            MenuButton.classList.add('close');
        }else{
            sidemenu.style.width = "0px";
            main.style.marginLeft = "0px"
            MenuButton.textContent = 'Menu';
            button.classList.remove('close');
        }

    });
});