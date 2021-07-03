$(function () {
  $(".slider_inner, .news_slider_inner").slick({
    nextArrow:
      '<button type="button" class="slick_next slick_button"></button>',
    prevArrow:
      '<button type="button" class="slick_prev slick_button"></button>',
    infinite: false,
  });
  $("select").styler();

  $(".header_button_menu").on("click", function () {
    $(".menu ul").slideToggle();
  });
});
