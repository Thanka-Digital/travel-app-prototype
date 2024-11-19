import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TASliderProps {
  children: React.ReactNode;
  isDotsShow?: boolean;
  isArrowsShow?: boolean;
  slideSpeed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  vertical?: boolean;
}

export default function TASlider(props: TASliderProps) {
  const {
    children,
    isDotsShow = true,
    isArrowsShow = false,
    slideSpeed = 500,
    slidesToScroll = 1,
    slidesToShow = 1,
    vertical
  } = props;
  var settings = {
    dots: isDotsShow,
    infinite: true,
    speed: slideSpeed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: isArrowsShow,
  };
  return <Slider vertical={vertical} {...settings}>{children}</Slider>;
}
