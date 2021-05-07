import "./index.sass";

$(".js-intro-button").on("click", function() {
  $(".intro__buttons-additional")
    .fadeToggle("slow")
    .css("display", "flex");
  $(".intro__button-img--all").toggleClass("intro__button-img--active");
});
