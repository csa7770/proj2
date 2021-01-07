$(function(){
  $('#nav .language').each(function(){
    var subMenu = $(this).find('.select')
     $(this).hover(function(){
       subMenu.stop().slideDown() }, function(){
       subMenu.stop().slideUp() }) //hover
  })//each

  $(window).scroll(function(){
    if ($(document).scrollTop() >= 300 && $(document).scrollTop() < 500 ) {
      $('#nav').css({background:'rgba(255,255,255,0.8)'});
      // $('header').addClass('active');
      //글자색
    }else {
      $('header').css({background:'rgba(255,255,255,0)'})
     // $('header').removeClass('active');
    }
 })

})//jq end