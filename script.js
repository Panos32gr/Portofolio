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

function mini1() {
  gsap.to(".vid1", { duration: 0.5, opacity: 0 });
  gsap.to(".credentials", { duration: 0.5, opacity: 0 });
  gsap.to(".pointer", { duration: 0.5, opacity: 0 });
  gsap.to(".contact", { duration: 0.5, opacity: 0 });
  gsap.to(".aboutme", { duration: 0.5, delay: 0.7, opacity: 1 });
}

function mini2() {
  gsap.to(".vid1", { duration: 0.5, opacity: 0 });
  gsap.to(".aboutme", { duration: 0.5, opacity: 0 });
  gsap.to(".pointer", { duration: 0.5, opacity: 0 });
  gsap.to(".contact", { duration: 0.5, opacity: 0 });
  gsap.to(".credentials", { duration: 0.5, delay: 0.7, opacity: 1 });
}

function mini3() {
  gsap.to(".vid1", { duration: 0.5, opacity: 0 });
  gsap.to(".credentials", { duration: 0.5, opacity: 0 });
  gsap.to(".aboutme", { duration: 0.5, opacity: 0 });
  gsap.to(".contact", { duration: 0.5, delay: 0.7, opacity: 1 });
  gsap.to(".pointer", { duration: 0.5, delay: 0.7, opacity: 1 });
}

function withdraw() {
  gsap.to(".aboutme", { opacity: 0 });
  gsap.to(".credentials", { opacity: 0 });
  gsap.to(".pointer", { duration: 0.5, opacity: 0 });
  gsap.to(".contact", { duration: 0.5, opacity: 0 });
  gsap.to(".vid1", { opacity: 1 });
  gsap.to(".container", { duration: 1, delay: 0.7, top: "-800px" });
  gsap.to(".welcome", { duration: 1, delay: 1.2, opacity: 1});
  gsap.to(".logo", { duration: 1, delay: 1.2, opacity: 1});
}

function toggleSphere() {
  if (!flag) {
    gsap.to(".logo", {duration: 1, opacity: 0});
    gsap.to(".welcome", {duration: 1, opacity: 0});
    gsap.to(".container", { duration: 1, top: "200px", ease: "power1.out" });
    gsap.to(".miniSphere1", {
      duration: 0.5,
      delay: 1.2,
      top: "3%",
      left: "30%",
    });
    gsap.to(".miniSphere2", {
      duration: 0.5,
      delay: 1.3,
      top: "30%",
      left: "33%",
    });
    gsap.to(".miniSphere3", {
      duration: 0.5,
      delay: 1.4,
      top: "53%",
      left: "24%",
    });
    flag = true;
  } else if (flag) {
    gsap.to(".miniSphere1", { duration: 0.5, top: "30%", left: "10%" });
    gsap.to(".miniSphere2", {
      duration: 0.5,
      top: "30%",
      left: "10%",
    });
    gsap.to(".miniSphere3", {
      duration: 0.5,
      top: "30%",
      left: "10%",
    });

    withdraw();
    flag = false;
  }
}




gsap.to(".iconcontainer", { duration: 1.5, left: "82%", ease: "bounce" });
