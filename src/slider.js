$(document).ready(function(){
  var step = 0;
  var classes = ["one", "two", "three", "four"];

  $('.next').click(function(){
    if(step == classes.length - 1 ) {
      step = 0;
    } else {
      step++;
    }
    $('#container').removeClass();
    $('#container').addClass( classes[step] );
  });
  $('.prev').click(function(){
    if(step == 0) {
      step = classes.length - 1;
    } else {
      step--;
    }
    $('#container').removeClass();
    $('#container').addClass( classes[step] );
  });
});
