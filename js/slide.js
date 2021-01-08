$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots : true,
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 2000
      });

      $('.center').slick({
        centerMode: true,
        slidesToShow: 3});
})