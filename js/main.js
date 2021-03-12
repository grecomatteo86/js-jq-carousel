$(function(){

  var next = $('.next');


  next.click(
    function(){

      var imgActive = $('.images img.active');
      var imgLast = $('.images img.last');
      var imgFirst = $('.images img.first');

      if (imgLast.hasClass('active')) {

        imgActive.removeClass('active');
        imgFirst.addClass('active');

      } else {

        imgActive.removeClass('active');
        imgActive.next().addClass('active');

      }

    }
    
  );

});
