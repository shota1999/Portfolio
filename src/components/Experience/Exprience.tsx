import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FirstJob } from "./FirstJob";

type SliderSettings = {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  arrows: boolean;
};

export const Experience = () => {
  const settings: SliderSettings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 0.5,
    slidesToScroll: 0,
    initialSlide: 1,
    arrows: false,
  };

  return (
    <div>
      <h2> Experience</h2>
      <Slider {...settings}>
        <FirstJob />
      </Slider>
    </div>
  );
};
