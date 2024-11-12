import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const imgs = [
  "SplashImg/s1.png",
  "SplashImg/s2.png",
  "SplashImg/s3.png",
  "SplashImg/s4.png",
  "SplashImg/s5.png",
];
export default function TASlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrow={false}
  };
  return (
    <Slider {...settings}>
      {imgs.map((img, i) => (
        <div key={i} className="h-80 relative">
          <img src={img} alt="images" />
        </div>
      ))}
    </Slider>
  );
}
