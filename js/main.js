$(function(){
  var next = $('.right_chevron');
  var prev = $('.left_chevron');
  var bull = $('.fa-circle');
  next.click(
    function(){
      var imgActive = $('.images_container img.active');
      var imgLast = $('.images_container img.last');
      var imgFirst = $('.images_container img.first');
      var bulletActive = $('.bullets_bar > i.active');
      var bulletLast = $('.bullets_bar > i.last');
      var bulletFirst = $('.bullets_bar > i.first');
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
      var imgActive = $('.images_container img.active');
      var imgFirst = $('.images_container img.first');
      var imgLast = $('.images_container img.last');
      var bulletActive = $('.bullets_bar > i.active');
      var bulletFirst = $('.bullets_bar > i.first');
      var bulletLast = $('.bullets_bar > i.last');
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
      var imgActive = $('.images_container img.active');
      var img = $('.images_container img');
      var bull = $('.bullets_bar .fa-circle');
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
      var imgActive = $('.images_container img.active');
      var img = $('.images_container img');
      var bull = $('.bullets_bar .fa-circle');
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
      var imgActive = $('.images_container img.active');
      var img = $('.images_container img');
      var bull = $('.bullets_bar .fa-circle');
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
      var imgActive = $('.images_container img.active');
      var img = $('.images_container img');
      var bull = $('.bullets_bar .fa-circle');
      if (img.eq(0).hasClass('active') || img.eq(1).hasClass('active') || img.eq(2).hasClass('active')) {
        img.removeClass('active');
        img.eq(3).addClass('active');
        bull.removeClass('active');
        bull.eq(3).addClass('active');
      }
    }
  );
});
