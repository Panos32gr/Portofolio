function toggleMenu() {
  var sideMenu = document.getElementById('sidenav');
  var menuButton = document.getElementById('menu');

  if (sideMenu.style.width === '250px') {
    sideMenu.style.width = '0';
    menuButton.textContent = 'Menu';
  } else {
    sideMenu.style.width = '250px';
    menuButton.textContent = 'Close';
  }
}
