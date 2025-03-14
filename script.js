
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
  gsap.to(".welcome", { duration: 1, delay: 1.2, opacity: 1 });
  gsap.to(".selfImage", { duration: 1, delay: 1.2,  opacity: 1 });
  gsap.to(".logo", { duration: 1, delay: 1.2, opacity: 1 });
}

var flag = false;

function toggleSphere() {
  const windowWidth = window.innerWidth;
  console.log("Window width:", windowWidth);
  console.log("Flag before toggling:", flag);


  if (windowWidth <= 800) {
      if (!flag) {
      gsap.to(".logo", { duration: 1, opacity: 0 });
      gsap.to(".welcome", { duration: 1, opacity: 0 });
      gsap.to(".selfImage", { duration: 1, opacity: 0 });
      gsap.to(".container", { duration: 1, top: "200px", ease: "power1.out" });
      gsap.to(".miniSphere1", {
        duration: 0.5,
        delay: 1.2,
        top: "3%",
        left: "53%"
      });
      gsap.to(".miniSphere2", {
        duration: 0.5,
        delay: 1.3,
        top: "25%",
        left: "53%"
      });
      gsap.to(".miniSphere3", {
        duration: 0.5,
        delay: 1.4,
        top: "43%",
        left: "34%"
      });
      flag = true;
    } else if (flag) {
      gsap.to(".miniSphere1", { 
        duration: 0.5,
         top: "20%",
          left: "10%"
         });
      gsap.to(".miniSphere2", {
        duration: 0.5,
        top: "20%",
        left: "10%"
      });
      gsap.to(".miniSphere3", {
        duration: 0.5,
        top: "20%",
        left: "10%"
      });

      withdraw();
      flag = false;
    }
} else {
    if (!flag) {
      gsap.to(".logo", { duration: 1, opacity: 0 });
      gsap.to(".welcome", { duration: 1, opacity: 0 });
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
        left: "33%"
      });
      gsap.to(".miniSphere3", {
        duration: 0.5,
        delay: 1.4,
        top: "53%",
        left: "24%"
      });
      flag = true;
    } else if (flag) {
      gsap.to(".miniSphere1", { duration: 0.5, top: "30%", left: "10%" });
      gsap.to(".miniSphere2", {
        duration: 0.5,
        top: "30%",
        left: "10%"
      });
      gsap.to(".miniSphere3", {
        duration: 0.5,
        top: "30%",
        left: "10%"
      });

      withdraw();
      flag = false;
    }
  }
}

function toggleNav1() {
  if (document.getElementById("navSphere1").style.top === "-200%") {
    gsap.to(".navSphere1", { duration: 1, top: "10%" });
    gsap.to(".navSphere2", { duration: 1, top: "-200%" });
    gsap.to(".navSphere3", { duration: 1, top: "-200%" });
    gsap.to(".fnc1", { rotation: 180 });
    gsap.to(".fnc2", { rotation: 0 });
    gsap.to(".fnc3", { rotation: 0 });
  } else {
    gsap.to(".navSphere1", { duration: 1, top: "-200%" });
    gsap.to(".fnc1", { rotation: 0 });
  }
}

function toggleNav2() {
  if (document.getElementById("navSphere2").style.top === "-200%") {
    gsap.to(".navSphere1", { duration: 1, top: "-200%" });
    gsap.to(".navSphere2", { duration: 1, top: "10%" });
    gsap.to(".navSphere3", { duration: 1, top: "-200%" });
    gsap.to(".fnc2", { rotation: 180 });
    gsap.to(".fnc1", { rotation: 0 });
    gsap.to(".fnc3", { rotation: 0 });
  } else {
    gsap.to(".navSphere2", { duration: 1, top: "-200%" });
    gsap.to(".fnc2", { rotation: 0 });
  }
}

function toggleNav3() {
  if (document.getElementById("navSphere3").style.top === "-200%") {
    gsap.to(".navSphere1", { duration: 1, top: "-200%" });
    gsap.to(".navSphere2", { duration: 1, top: "-200%" });
    gsap.to(".navSphere3", { duration: 1, top: "10%" });
    gsap.to(".fnc3", { rotation: 180 });
    gsap.to(".fnc1", { rotation: 0 });
    gsap.to(".fnc2", { rotation: 0 });
  } else {
    gsap.to(".navSphere3", { duration: 1, top: "-200%" });
    gsap.to(".fnc3", { rotation: 0 });
  }
}

if (window.innerWidth <= 800) {
gsap.to(".iconcontainer", { duration: 1.5, left: "42%", ease: "bounce" });
}else{
  gsap.to(".iconcontainer", { duration: 1.5, left: "82%", ease: "bounce" });
}
