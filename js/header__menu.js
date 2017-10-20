var menuBtn = document.querySelector('.header__menu-btn');
var menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
