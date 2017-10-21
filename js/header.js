// link list
var linkList =
  '<li><a href="index.html">home</a></li>'+
  '<li><a href="about.html">about</a></li>'+
  '<li><a href="services.html">services</a></li>'+
  '<li><a href="our_plans.html">our plans</a></li>'+
  '<li><a href="contact.html">contact</a></li>'

// write header
document.write(
'<header class="noselect">'+
  '<div class="container">'+
    '<div class="header__title">'+
      '<a href="index.html">EpicTuition</a>'+
    '</div>'+
    '<ul class="header__btn d-none d-md-block">'+
      linkList+
    '</ul>'+
    '<div class="header__menu-btn d-sm-block d-md-none">'+
      '<div class="header__menu-btn__line"></div>'+
    '</div>'+
    '<div class="header__menu d-md-none">'+
      '<ul>'+
        linkList+
      '</ul>'+
      '<div class="header__menu__contact">'+
        '<i class="fa fa-mobile-phone"></i> 0774 928 4101<br>'+
        '<i class="fa fa-envelope-o"></i> contact@epictuition.com<br>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</header>')

// add active class to current page link
var url = window.location.pathname;
var fileName = url.substring(url.lastIndexOf('/')+1);
var linkArray = document.getElementsByClassName('header__btn')[0].getElementsByTagName('a');
var mobileLinkArray = document.getElementsByClassName('header__menu')[0].getElementsByTagName('a');
if (fileName === "") {
  linkArray[0].classList.add('active');
  mobileLinkArray[0].classList.add('active');
} else {
  for (var i=0; i<linkArray.length; i++) {
    var href = linkArray[i].getAttribute('href');
    if (fileName == href) {
      linkArray[i].classList.add('active');
      mobileLinkArray[i].classList.add('active');
      break;
    }
  }
}

// toggle mobile menu button style (hamburger <-> cross)
var menuBtn = document.querySelector('.header__menu-btn');
var menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
