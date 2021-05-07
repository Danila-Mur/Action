import "./index.sass";
import "slick-carousel/slick/slick.min";
import "slick-carousel/slick/slick.css";

$(".technologies__cards").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: ".button__slider--next1",
  prevArrow: ".button__slider--prev1",
  responsive: [
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
