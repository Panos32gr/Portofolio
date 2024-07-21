document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('zBAkN7Fmv44dFqA_O');

  function sendMail(event) {
    event.preventDefault();

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_z4phvkq", "template_87hzluf", params)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email has been sent successfully.");
      }, function (error) {
        console.log('FAILED...', error);
        alert("Email sending failed.");
      });
  }

  document.getElementById('contact-form').addEventListener('submit', sendMail);
});


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
