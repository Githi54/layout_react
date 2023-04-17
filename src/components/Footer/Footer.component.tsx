import LEG from "../../assets/leg.png";
import TShirt from "../../assets/tshirt.png";
import Girl from "../../assets/girl.png";
import Forest from "../../assets/forest.png";
import Boots from "../../assets/boots.png";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Footer.component.css";

SwiperCore.use([Navigation]);

export const Footer = () => {
  const photos = [LEG, TShirt, Forest, Girl, Boots];

  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__head">Choose looks</h2>
        <div className="footer__swiper">
          <Swiper
          slidesPerView={5}
          spaceBetween={250}
          navigation
          centeredSlides
          loop
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="footer__img_container">
                  <img src={photo} alt={photo} className="footer__img" />
                </div>
              </SwiperSlide>
            ))}
            {photos.map((photo) => (
              <SwiperSlide key={photo}>
                <div className="footer__img_container">
                  <img src={photo} alt={photo} className="footer__img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h2 className="footer__head">More about us</h2>
          <div className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            enim sed libero commodo efficitur. Suspendisse et lorem ac neque
            dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut
            pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus
            quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus
            felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc
            ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu
            condimentum. Morbi vitae convallis purus, ac finibus ipsum. <br />{" "}
            <br />
            Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam
            pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu,
            eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus,
            urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus
            sit amet volutpat ante, ut condimentum lorem. Quisque auctor
            sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam
            sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit.
            Curabitur ac accumsan velit. In hac habitasse platea dictumst.
          </div>
        </div>
      </div>
    </footer>
  );
};
