document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var options = { responsiveThreshold: 0 }
    var instances = M.Parallax.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var options = { height: 400 }
    var instances = M.Slider.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = { dropdownOptions: {} }
    var instances = M.FormSelect.init(elems, options);
  });


  var instance = M.FloatingActionButton.getInstance(elem);

  M.toast({html: 'Added to cart!'})

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
