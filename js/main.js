$(function(){

  var next = $('.next');
  

  next.click(

    function(){

      var imgActive = $('.images img.active');
      imgActive.removeClass('active');
      imgActive.next().addClass('active');

    }

  );

});
