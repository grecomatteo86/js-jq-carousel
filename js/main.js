$(function(){

  var next = $('.next');
  var prev = $('.prev');


  next.click(

    function(){

      var imgActive = $('.images img.active');
      var imgLast = $('.images img.last');
      var imgFirst = $('.images img.first');

      var bulletActive = $('.nav > i.active');
      var bulletLast = $('.nav > i.last');
      var bulletFirst = $('.nav > i.first');

      if (imgLast.hasClass('active') && bulletLast.hasClass('active')) {

        imgActive.removeClass('active');
        imgFirst.addClass('active');
        bulletActive.removeClass('active');
        bulletFirst.addClass('active');

      } else {

        imgActive.removeClass('active');
        imgActive.next().addClass('active');
        bulletActive.removeClass('active');
        bulletActive.next().addClass('active');

      }

    }

  );


  prev.click(

    function () {

      var imgActive = $('.images img.active');
      var imgFirst = $('.images img.first');
      var imgLast = $('.images img.last');

      if (imgFirst.hasClass('active')) {

        imgActive.removeClass('active');
        imgLast.addClass('active');

      } else {

        imgActive.removeClass('active');
        imgActive.prev().addClass('active');

      }


    }

  );


});
