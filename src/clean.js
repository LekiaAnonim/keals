console.clear();

window.addEventListener('scroll', function () {
  

  if (document.documentElement.scrollTop > 0) {

    document.querySelector('.landing-section').style.marginTop = '0';
    document.querySelectorAll('.nav-container').forEach((ele) => {
      ele.classList.add('black-background');
    })
    document.querySelector('.contact-form-container').style.background = '#0da34e';
  } else {
    // document.querySelector('.first-section-container').style.marginTop = '-55px';
    document.querySelectorAll('.nav-container').forEach((ele) => {
      ele.classList.remove('black-background');
    })
    document.querySelector('.contact-form-container').style.background = 'black';
  }
})


// ------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}