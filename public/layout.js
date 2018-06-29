document.addEventListener('DOMContentLoaded', function() {
    var elemsParallex = document.querySelectorAll('.parallax');
    var optionsParallex = { responsiveThreshold: 0 }
    var instancesParallex = M.Parallax.init(elemsParallex, optionsParallex);
    var elemsModal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(elemsModal, optionsModal);
    var elemsSlider = document.querySelectorAll('.slider');
    var optionsSlider = { height: 400 }
    var instancesSlider = M.Slider.init(elemsSlider, optionsSlider);
    var elemsSelect = document.querySelectorAll('select');
    var optionsSelect = { dropdownOptions: {} }
    var instancesSelect = M.FormSelect.init(elemsSelect, optionsSelect);
    M.toast({html: 'Added to cart!'})
    var instance = M.FloatingActionButton.getInstance(elems);


  });
