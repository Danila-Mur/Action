import "./index.sass";
import "slick-carousel/slick/slick.min";
import "slick-carousel/slick/slick.css";

$(".technologies__cards").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: ".button__slider--next",
  prevArrow: ".button__slider--prev",
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
