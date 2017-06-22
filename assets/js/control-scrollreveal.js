$(function(){
  window.sr = ScrollReveal();
  sr.reveal('.parallax .container', {
    duration: 1500,
      origin: 'bottom'
  });
  sr.reveal('.section', {
    duration: 1000,
      origin: 'bottom'
  });
  sr.reveal('.section-service .row', {
    duration: 1000,
      origin: 'left'
  });
  sr.reveal('.card-blue', {
    duration: 800,
      distance: '30px',
      easing: 'cubic-bezier(0.3,-0.36, 0.68, 1.46)'
  }, 300);
  sr.reveal('.footer', {
    duration: 1000
  })
})
