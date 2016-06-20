$(document).ready(function(){
  var step = 0;
  var classes = ["intro", "ui", "ux", "illus", "teach", "front", "music"];

  $('.next').click(function(){
    if(step == classes.length - 1 ) {
      step = 0;
    } else {
      step++;
    }
    $('#slider').removeClass();
    $('#slider').addClass( classes[step] );
    $('#body').removeClass();
    $('#body').addClass( classes[step] );
  });
  $('.prev').click(function(){
    if(step == 0) {
      step = classes.length - 1;
    } else {
      step--;
    }
    $('#slider').removeClass();
    $('#slider').addClass( classes[step] );
    $('#body').removeClass();
    $('#body').addClass( classes[step] );
  });
});
