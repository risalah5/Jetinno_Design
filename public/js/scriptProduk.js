// nav
const dropdownButton = document.querySelector('.dropdown-button-produk');
const dropdownContent = document.querySelector('.dropdown-produk');

dropdownButton.addEventListener('mouseenter', () => {
    dropdownContent.classList.toggle('hidden');
});

dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.classList.toggle('hidden');
});



// drop down aside
document.addEventListener('DOMContentLoaded', function() {
    const mobileFilterBtn = document.querySelector('[aria-controls="mobile-filters"]');
    const mobileFilters = document.getElementById('mobile-filters');
  
    mobileFilterBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mobileFilters.classList.toggle('hidden');
    });
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
