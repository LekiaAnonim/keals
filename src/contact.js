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