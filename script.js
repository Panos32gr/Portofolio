function toggleMenu() {
  var sideMenu = document.getElementById('sidenav');
  var menuButton = document.getElementById('menu');
  var homelogo = document.getElementById('hmbtn')

  if (sideMenu.style.width === '250px') {
    menuButton.style.left = '10px';
    sideMenu.style.width = '0';
    homelogo.style.left = '110px';
    menuButton.textContent = 'Menu';
  } else {
    sideMenu.style.width = '250px';
    menuButton.style.left = '260px';
    homelogo.style.left = '360px';
    menuButton.textContent = 'Close';
  }
}
