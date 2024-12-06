// nav
const dropdownButton = document.querySelector('.dropdown-button-produk');
const dropdownContent = document.querySelector('.dropdown-produk');

dropdownButton.addEventListener('mouseenter', () => {
    dropdownContent.classList.toggle('hidden');
});

dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.classList.toggle('hidden');
});

// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-white", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " bg-white";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-white", "");
  }

  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";
  dots[myIndex-1].className += " bg-white";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

var swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 24,
    navigation: {
      nextEl: ".multiple-slide-carousel .swiper-button-next",
      prevEl: ".multiple-slide-carousel .swiper-button-prev",
    },
    breakpoints: {
     1920: {
         slidesPerView: 5,
         spaceBetween: 0
     },
     1028: {
         slidesPerView: 5,
         spaceBetween: 0
     },
     800: {
        slidesPerView: 3,
        spaceBetween: 0
    },
     400: {
         slidesPerView: 2,
         spaceBetween: 0
     },
     300: {
        slidesPerView: 1,
        spaceBetween: 0
    }
   }
  });


// News
function filterArticles(category) {
  const articles = document.querySelectorAll('.article-card');
  const buttons = document.querySelectorAll('[onclick^="filterArticles"]');
  
  buttons.forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
  });
  document.querySelector(`[onclick="filterArticles('${category}')"]`).setAttribute('aria-pressed', 'true');

  articles.forEach(article => {
    if (category === 'all' || article.dataset.category === category) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}


  // Burger menus
  document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



// mobile produk menu dropdwon
const produkButton = document.querySelector('.produk-button');
const produkDropdown = document.querySelector('.produk-dropdown');

produkButton.addEventListener('click', () => {
    produkDropdown.classList.toggle('hidden');
}); 
