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
var $masonry = $('.grid');
$masonry.masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '200px',
  // no transitions
  transitionDuration: 0
});

// layout Masonry after each image loads
$masonry.imagesLoaded(function() {
  $masonry.masonry('layout');
});

// Material Box
$(document).ready(function(){
  $('.materialboxed').materialbox();
});


// FAB
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});
