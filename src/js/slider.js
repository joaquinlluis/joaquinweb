$(document).ready(function(){
  var step = 0;
  var classes = ["intro", "ui", "ux", "illus", "teach", "front", "music"];

  $('.section-menu li').click(function(){
    step = $('.section-menu li').index(this);
    change(step);
  });
  $('.next').click(function(){
    if(step == classes.length - 1 ) {
      step = 0;
    } else {
      step++;
    }
    change(step);
  });
  $('.prev').click(function(){
    if(step == 0) {
      step = classes.length - 1;
    } else {
      step--;
    }
    change(step);
  });

  function change(step) {
    $('#body , #slider , .section-menu li').removeClass();
    $('#body , #slider').addClass( classes[step] );
    $('.section-menu li:eq(' + step + ')').addClass('active');
  }

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
  });

});
