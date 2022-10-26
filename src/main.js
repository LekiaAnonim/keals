const serviceBoard = document.querySelector('.main-services');
// const serviceTag = document.querySelector('.service');
// const services = ['Vessel Cleaning', 'Ship Cleaning', 'Office Cleaning', 'Residential Cleaning', 'Janitorial Cleaning', 'Carpet/Rug cleaning', 'Commercial Cleaning', 'Household Cleaning'];
const services = ['Cleaning Services']
let textPosition = 0;
const speed = 200;

// import { typeWriter } from "my-typewriter";

function typewriter () {
  services.forEach((serv) => {
    document.querySelector('#my-typewriter').innerHTML = serv.substring(0, textPosition) + `<span class="blinker">\u25ae</span>`;
    if (textPosition++ != serv.length) setTimeout(typewriter, speed);
  }); 
}

window.addEventListener('load', typewriter);

// typeWriter({
//   texts: services,
  
//   letterPause: 1200,
  
//   typeSpeed: 0,
  
//   eraseSpeed: 100,
  
//   blinkSpeed: 300,
  
//   speed: 200,
// })

// console.log("what's up?");

// -----------------------------------------------------
// window.onscroll = function () { scrollFunction };


// function scrollFunction() {
//   document.querySelector('.nav-container').classList.add('black-background');
//   console.log('Hey');
// }
let trans = 0;
const serviceImages = document.querySelectorAll('.service-images .images img');
const serviceImageDiv = document.querySelector('.images');
window.addEventListener('scroll', function () {
  
  serviceImages.forEach((image, i) => {
    if (document.documentElement.scrollTop <= 0) {
      image.style.transform = `translateY(0)`;
    } else {
      trans = trans + i;
      // console.log(trans);
      image.style.transform = `translate(${-i*150}px, ${-i * 100}px)`;
      // image.style.transform = `translateX(${-i*100}px)`;
      image.style.transition = `transform 5s`;
    };
  });
  if (document.documentElement.scrollTop > 0) {

    document.querySelector('.first-section-container').style.marginTop = '0';
    document.querySelector('.nav-container').classList.add('black-background');
    document.querySelector('.contact-form-container').style.background = '#0da34e';
  } else {
    document.querySelector('.first-section-container').style.marginTop = '-55px';
    document.querySelector('.nav-container').classList.remove('black-background');
    document.querySelector('.contact-form-container').style.background = 'black';
  }
})

// Mouse track

function mouseTrack(element) {
  document.onmousemove = (event) => {
    const { clientX, clientY } = event;
    
    var rect = element.getBoundingClientRect();
    // console.log(`clientX : ${clientX}, rect.right: ${rect.right}, rect.left: ${rect.left}, clientY: ${clientY}, rect.top: ${rect.top}, rect.bottom: ${rect.bottom}, pageX: ${event.pageX}, pageY: ${event.pageY}`);
    // let dist = Math.floor(Math.sqrt(Math.pow(clientX - (rect.left+(element.width()/2)), 2) + Math.pow(clientY - (rect.top+(element.height()/2)), 2)));
    // console.log(dist);
    // if()
  };
}
mouseTrack(serviceImageDiv);


// console.clear();
const element = document.querySelector(".cursor");
const target = document.querySelector(".target");
const text = document.querySelector(".text");
class Cursor {
  constructor(el, target, text) {
    this.el = el;
    // this.target = target;
    // this.text = text;
    // this.triggerDistance = this.target.getBoundingClientRect().width;
    this.bind();
  }

  bind() {
    document.addEventListener("mousemove", this.move.bind(this), false);
  }

  move(e) {
    const cursorPosition = {
      left: e.clientX,
      top: e.clientY
    };
    document.querySelectorAll(".target").forEach((single) => {
      const triggerDistance = single.getBoundingClientRect().width;

      const targetPosition = {
        left:
          single.getBoundingClientRect().left +
          single.getBoundingClientRect().width / 2,
        top:
          single.getBoundingClientRect().top +
          single.getBoundingClientRect().height / 2
      };
      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      };

      const angle = Math.atan2(distance.x, distance.y);
      const hypotenuse = Math.sqrt(
        distance.x * distance.x + distance.y * distance.y
      );
      if (hypotenuse < triggerDistance) {
        // Nikhil - look at this code to adjust the round cursor area sizing
        TweenMax.to(this.el, 0.2, {
          left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
          top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
          height: single.clientHeight,
          width: single.clientWidth
        });
        TweenMax.to(single.querySelector(".text"), 0.2, {
          x: -((Math.sin(angle) * hypotenuse) / 2),
          y: -((Math.cos(angle) * hypotenuse) / 2)
        });
      } else {
        TweenMax.to(this.el, 0.2, {
          left: cursorPosition.left,
          top: cursorPosition.top,
          height: "12px",
          width: "12px"
        });

        TweenMax.to(single.querySelector(".text"), 0.2, {
          x: 0,
          y: 0
        });
      }
    });
  }
}
const cursor = new Cursor(element, target);


// ----------------------------------------------------

const sectionDivide = document.querySelector('.second-divide');
const sectionButton = document.querySelector('.allService-button');

const sectionRect = sectionDivide.getBoundingClientRect();
const sectionTop = sectionRect.top;
const sectionBottom = sectionRect.bottom;

// console.log('---------------------------------');


window.addEventListener('scroll', function () {
  let scrollY = document.documentElement.scrollTop;
  if (scrollY > sectionTop || scrollY < sectionBottom) {
      let diff = scrollY - 1750;
      if (diff > 0 && diff < 2500) {
        sectionButton.style.transform = `translateY(${diff}px)`;
      };
  }
});

function changeBackground(target, source) {
  target.addEventListener('click', () => {
    source.classList.toggle('changebackground');
  });
}

changeBackground(document.querySelector('.allService-button'), document.querySelector('.second-section'));

changeBackground(document.querySelector('.client-review-button'), document.querySelector('#third-section'));

function scrollReveal(elements, container) {
  window.addEventListener('scroll', function () {
    let sY = document.documentElement.scrollTop;
    let contDict = container.getBoundingClientRect();
    let sectTop = contDict.top;
    let sectionBottom = contDict.bottom;
    // console.log(sY, sectTop);
    if (sY > sectTop+2500) {
      elements.forEach((elem) => {
        // console.log(elem);
        elem.style.transform = `translateX(0)`;
      });
    } else {
      elements.forEach((elem) => {
        // console.log(elem);
        elem.style.transform = `translateX(90vw)`;
      });
    }
 
});
}

let clientReviewContainer = document.querySelector('.section-client-review');

let clientReview = document.querySelectorAll('.client-review-card');
scrollReveal(clientReview, clientReviewContainer);

function scrollToTop() {
  window.scrollTo(0, 0);
}

document.querySelector('.back-to-top').addEventListener('click', scrollToTop);


// ----------------------------------------------------------------------------------

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
