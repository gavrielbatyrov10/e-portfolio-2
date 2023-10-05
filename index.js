function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }
 
  function disableScroll(){
    var top = $(window).scrollTop();
    var left = $(window).scrollLeft();
    $('body').css('overflow', 'hidden');
    $(window).scroll(function(){
        $(this).scrollTop(top).scrollLeft(left);
    });
}