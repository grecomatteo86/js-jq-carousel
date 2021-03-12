$(function(){

  var next = $('.next');
  var active = $('.active');

  next.click(
    function(){
      active.removeClass('active');
      active.next().addClass('active');
    }
  );

});
