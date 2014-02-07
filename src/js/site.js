$(function(){
  var locked = false;

  var $tabs = $('#ImageCarousel .tab');
  var $image_carousel = $('#ImageCarousel');
  var $content_carousel = $('#ContentCarousel');


  // Function to set the current tab, as well as the various carousels.
  var setCurrentTab = function(idx) {
    // Bail out if UI already doing it's thang.
    if (locked) return;

    // Lock the UI so it doesn't end up in an inconsistant state.
    locked = true;

    // Add/remove class to hilite tab.
    $tabs.removeClass('active-tab');
    $($tabs.get(idx)).addClass('active-tab');

    // Scroll the image jcarousel...
    $image_carousel.jcarousel('scroll', idx, function() {
      // ...and now scroll the content jcarousel...
      $content_carousel.jcarousel('scroll', idx, function() {
        // .. then unlock the UI.
        locked = false;
      });
    });
  };


  // Define the css3 transition, or fallback to jquery animations.
  var transitions = Modernizr.csstransitions && {
    transforms: Modernizr.csstransforms,
    transforms3d: Modernizr.csstransforms3d,
    easing: 'ease'
  };

  // Create the jcarousel objects.
  $image_carousel.jcarousel({
    list: '.slides',
    transitions: transitions
  });

  $content_carousel.jcarousel({
    list: '.slides',
    transitions: transitions
  });


  // Hook-up click handler on the tabs.
  $tabs.on('click', function(event){
    event.preventDefault();
    setCurrentTab($(this).index());
  });


  // Initialize the 1st tab as active.
  setCurrentTab(0);
});
