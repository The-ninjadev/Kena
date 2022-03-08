let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.add('active')
}

document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active')
}

window.onscroll = () => {
  navbar.classList.remove('active');

  if(window.scrollY > 0) {
      document.querySelector('.header').classList.add('activeH')
  }else {
      document.querySelector('.header').classList.remove('activeH')
  }
};

window.onload = () => {

  if(window.scrollY > 0) {
      document.querySelector('.header').classList.add('activeH')
  }else {
      document.querySelector('.header').classList.remove('activeH')
  }
};




var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
          slidesPerView: 1,
            
        },
        640: {
          slidesPerView: 2,
          
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

