/* コピーライト書換え */
$("small").html("Copyright © 1997 - 2020<br>Historiographical Institute The University of Tokyo © 東京大学");

/* スムーズスクロール */
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

/* page topボタン */
$(function(){
var topBtn=$('#page-top');
topBtn.hide(); 
//ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  } 
});
});