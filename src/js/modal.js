$(document).ready(function(){

  $('.section-trigger').click(function(){
    sectionId = $(this).data('trigger');
    $('.section-trigger').removeClass('active');
    $(this).addClass('active');
    $('.section-expand').removeClass('active');
    $(sectionId).toggleClass('active');
  });
  $('.close-button').click(function(){
    sectionCloseId = $(this).data('trigger');
    $(sectionCloseId).toggleClass('active');
    $('.section-trigger').removeClass('active');
  });

  $('.modal-trigger').click(function(){
    sectionId = $(this).data('trigger');
    $('.modal').removeClass('active');
    $(sectionId).toggleClass('active');
  });

});
