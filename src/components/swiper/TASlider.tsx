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
  className?: string;
}

export default function TASlider(props: TASliderProps) {
  const {
    children,
    isDotsShow = true,
    isArrowsShow = false,
    slideSpeed = 500,
    slidesToScroll = 1,
    slidesToShow = 1,
    vertical,
    className,
  } = props;

  var settings = {
    dots: isDotsShow,
    infinite: false,
    speed: slideSpeed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: isArrowsShow,
  };
  return <Slider vertical={vertical} {...settings} className={className}>{children}</Slider>;
}
