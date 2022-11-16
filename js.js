(function($) {
  $('.cate ul').hide();
  $('.cate .menu .subopen').click(function() {
    if($(this).hasClass('active')){
      $(this).parent().next().slideUp('slow');
      $(this).removeClass('actvie');
    }
    else{
      $('.accordion').find('.active').parent().next().slideUp('slow');
      $('.accordion').find('.active').removeClass('active');
      $(this).parent().next().slideDown('slow');
      $(this).addClass('active');
    }
  });
})(jQurey); // 메뉴

// 줌인 줌아웃.
var nowZoom = 100;
(function zoomOut() {
  nowZoom = nowZoom - 10;
  if(nowZoom <= 70) nowZoom = 70;
  zooms();
}
)
(function zoomIn () {
  nowZoom = nowZoom + 10;
  if(nowZoom >= 200) nowZoom = 200;
  zooms();
})

(function zoomReset(){
  nowZoom = 100;
  zooms();
})

(function zooms(){
  document.body.style.zoom = nowZoom + "%";
})


function diffDay() {
  const masTime = new Date("");
  const todayTime = new Date();

  const diff = masTime - todayTime;

  const diffDay = Math.floor(diff / (1000*60*60*24));
  
}
