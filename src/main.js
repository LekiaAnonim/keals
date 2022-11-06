

window.addEventListener('scroll', function () {
  

  if (document.documentElement.scrollTop > 0) {

    // document.querySelector('.landing-section').style.marginTop = '0';
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

// Mouse track




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


// ------------------------------------------------------------------
function scrollToTop() {
  window.scrollTo(0, 0);
}

document.querySelectorAll('.back-to-top').forEach((ele) => {
  ele.addEventListener('click', scrollToTop);
})


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


// Slideshow

// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .76,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { // Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();
