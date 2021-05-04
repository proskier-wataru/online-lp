$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    $('#box').fadeToggle();
    event.preventDefault();
  });
});