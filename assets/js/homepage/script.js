document.addEventListener( 'DOMContentLoaded', function() {
  let sliderMainscreen =  document.querySelector('.mainscreen-slider');

  if(sliderMainscreen) {
    var splide = new Splide( sliderMainscreen, {
      type       : 'loop',
      perPage    : 1,
      gap: 10,
      perMove: 1,
      pagination: true,
      autoplay: 5,
      arrows: false,
    }).mount();
  
  }

  
} );
