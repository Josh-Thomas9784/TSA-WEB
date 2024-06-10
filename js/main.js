// navbar scroll
var lastScrollTop = 0;
navbar = document.getElementById('header');
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-80px";
  } else{
    navbar.style.top="0px";
  }
  lastScrollTop = scrollTop;
})