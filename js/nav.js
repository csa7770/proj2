$(function(){

  $(window).scroll(function(){
    if ($(document).scrollTop() >= 300 && $(document).scrollTop() < 4000 ) {
      $('#nav').css({background:'rgba(255,255,255,0.8)'});
      // $('header').addClass('active');
      //글자색
    }else {
      $('#nav').css({background:'rgba(255,255,255,0)'})
     // $('header').removeClass('active');
    }
 })

})//jq end