document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("zBAkN7Fmv44dFqA_O");

  function sendMail(event) {
    event.preventDefault();

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_z4phvkq", "template_87hzluf", params).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email has been sent successfully.");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Email sending failed.");
      }
    );
  }

  document.getElementById("contact-form").addEventListener("submit", sendMail);
});

var flag = false;

function toggleSphere() {
  if (!flag) {
  gsap.to(".miniSphere1", { duration: 0.5, top: "3%", left: "38%" });
  gsap.to(".miniSphere2", { duration: 0.5, delay: 0.4, top: "32%", left: "41%" });
  gsap.to(".miniSphere3", { duration: 0.5, delay: 0.6, top: "60%", left: "36%" });
  flag = true;
  }else if(flag) {
    gsap.to(".miniSphere1", { duration: 0.5, top: "40%", left: "10%" });
    gsap.to(".miniSphere2", { duration: 0.5, delay: 0.4, top: "40%", left: "10%" });
    gsap.to(".miniSphere3", { duration: 0.5, delay: 0.6, top: "40%", left: "10%" });
    flag = false;
  }
}


gsap.to(".iconcontainer", { duration: 1.5, left: "82%", ease: "bounce" });



