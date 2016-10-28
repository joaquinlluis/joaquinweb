$(document).ready(function(){
  $('.close-button').click(function(event){
    event.stopPropagation()
    CloseId = $(this).data('trigger');
    $(CloseId).removeClass('active');
  });

  $('.modal-trigger').click(function(){
    sectionId = $(this).data('trigger');
    $('.modal').removeClass('active');
    $(sectionId).toggleClass('active');
  });

  $('.menu-trigger').click(function(){
    $('.navigation-content').toggleClass('active');
    $('.menu-trigger').toggleClass('active');
  });

  $('.swap-paper').click(function(){
    swapactive = $('.swap-paper').hasClass('active');
    if(swapactive) {
      console.log('algo');
    } else {
      $(this).addClass('active');
    }
  });

});
