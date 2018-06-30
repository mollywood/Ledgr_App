// SideNav
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// Parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

// Modal
$(document).ready(function(){
  $('.modal').modal();
});

// Select
$(document).ready(function(){
  $('select').formSelect();
});

// Slider
$(document).ready(function(){
  $('.slider').slider({
    indicators: false,
    height: 500
  });
});

var instance = M.Slider.getInstance(elem);
  instance.start();
  instance.next();
  instance.prev();

// Masonry
$('.grid').masonry({
  columnWidth: 200,
  itemSelector: '.grid-item'
});

// Material Box
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

