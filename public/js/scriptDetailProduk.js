// nav
const dropdownButton = document.querySelector('.dropdown-button-produk');
const dropdownContent = document.querySelector('.dropdown-produk');

dropdownButton.addEventListener('mouseenter', () => {
    dropdownContent.classList.toggle('hidden');
});

dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.classList.toggle('hidden');
});

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

// Produk detail
const buttonDeskripsi= document.querySelector('.button-deskripsi');
const buttonModel= document.querySelector('.button-model');
const modelLayout = document.querySelector('.model-layout');
const deskripsi= document.querySelector('.deskripsi')

buttonDeskripsi.addEventListener('click', () => {
  buttonModel.classList.remove('active');
  buttonDeskripsi.classList.add('active');
  const deskripsi = document.querySelector('.detail-produk');
  const model = document.querySelector('.model-produk');
  buttonDeskripsi.classList.add('border-b-[3px]');
  buttonModel.classList.remove('border-b-[3px]');
});

buttonDeskripsi.addEventListener('click', () => {
    deskripsi.classList.remove('hidden');
    modelLayout.classList.add('hidden');
})

buttonModel.addEventListener('click', () => {
    deskripsi.classList.add('hidden');
    modelLayout.classList.remove('hidden');
})

buttonModel.addEventListener('click', () => {
  buttonModel.classList.add('active');
  buttonDeskripsi.classList.remove('active');
  const deskripsi = document.querySelector('.detail-produk');
  const model = document.querySelector('.model-produk');
  buttonDeskripsi.classList.remove('border-b-[3px]');
  buttonModel.classList.add('border-b-[3px]');
})


// mobile produk menu dropdwon
const produkButton = document.querySelector('.produk-button');
const produkDropdown = document.querySelector('.produk-dropdown');

produkButton.addEventListener('click', () => {
    produkDropdown.classList.toggle('hidden');
}); 