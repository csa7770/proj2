$(function(){
     $(function(){
      $('.burger_button').click(function(){
        $('#nav_pop').fadeIn();
        });

// 버거버튼 누르면 닫히는 설정
      $('.nav_pop_close').click(function(){
          $('#nav_pop').fadeOut();
          });
      })
})