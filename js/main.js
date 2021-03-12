$(function(){

  var next = $('.next');
  var prev = $('.prev');
  var bull = $('.fa-circle');


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

      var bulletActive = $('.nav > i.active');
      var bulletFirst = $('.nav > i.first');
      var bulletLast = $('.nav > i.last');

      if (imgFirst.hasClass('active') && bulletFirst.hasClass('active')) {

        imgActive.removeClass('active');
        imgLast.addClass('active');
        bulletActive.removeClass('active');
        bulletLast.addClass('active');

      } else {

        imgActive.removeClass('active');
        imgActive.prev().addClass('active');
        bulletActive.removeClass('active');
        bulletActive.prev().addClass('active');

      }


    }

  );


  bull.eq(0).click(

    function () {

      var imgActive = $('.images img.active');
      var img = $('.images img');
      var bull = $('.nav .fa-circle');

      if (img.eq(1).hasClass('active') || img.eq(2).hasClass('active') || img.eq(3).hasClass('active')) {
        img.removeClass('active');
        img.eq(0).addClass('active');
        bull.removeClass('active');
        bull.eq(0).addClass('active');
      }

    }

  );

  bull.eq(1).click(

    function () {

      var imgActive = $('.images img.active');
      var img = $('.images img');
      var bull = $('.nav .fa-circle');

      if (img.eq(0).hasClass('active') || img.eq(2).hasClass('active') || img.eq(3).hasClass('active')) {
        img.removeClass('active');
        img.eq(1).addClass('active');
        bull.removeClass('active');
        bull.eq(1).addClass('active');
      }

    }

  );

  bull.eq(2).click(

    function () {

      var imgActive = $('.images img.active');
      var img = $('.images img');
      var bull = $('.nav .fa-circle');

      if (img.eq(0).hasClass('active') || img.eq(1).hasClass('active') || img.eq(3).hasClass('active')) {
        img.removeClass('active');
        img.eq(2).addClass('active');
        bull.removeClass('active');
        bull.eq(2).addClass('active');
      }

    }

  );

  bull.eq(3).click(

    function () {

      var imgActive = $('.images img.active');
      var img = $('.images img');
      var bull = $('.nav .fa-circle');

      if (img.eq(0).hasClass('active') || img.eq(1).hasClass('active') || img.eq(2).hasClass('active')) {
        img.removeClass('active');
        img.eq(3).addClass('active');
        bull.removeClass('active');
        bull.eq(3).addClass('active');
      }

    }

  );


});
