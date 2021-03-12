$(function(){

  var next = $('.next');


  next.click(
    function(){

      var imgActive = $('.images img.active,.nav > i.active');
      var imgLast = $('.images img.last,.nav > i.last');
      var imgFirst = $('.images img.first,.nav > i.first');

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
