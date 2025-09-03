import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Mainbanner.scss";

// ✅ src/img에서 이미지 가져오기
import banner1 from "../../img/mainbanner/main01.jpg";
import banner2 from "../../img/mainbanner/main02.jpg";
import banner3 from "../../img/mainbanner/main03.jpg";
import banner4 from "../../img/mainbanner/main04.jpg";

const Mainbanner = () => {
  return (
    <section className="main-banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 30000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {/* 1번째 배너 */}
        <SwiperSlide>
          <img src={banner1} alt="배너1" />
          <div className="banner-text banner-text-1">
            <span className="span1">THE SUMMER SEND-OFF SALE</span>
            <h2>UP TO 60% OFF SELECT ITEMS</h2>
            <p>
              It’s the last sale of the summer—you gotta go big. <br />
              Exclusions apply, while supplies last.
            </p>
            <a href="#">SHOP THE SALE</a>
          </div>
        </SwiperSlide>

        {/* 2번째 배너 */}
        <SwiperSlide>
          <img src={banner2} alt="배너2" />
          <div className="banner-text banner-text-2">
            <span>NEW</span>
            <h2>A GRIP YOU’LL TRIP FOR</h2>
            <p>
              Makeup-gripping primers swirled with skincare <br />
              that extend makeup wear up to 12 hours.
            </p>
            <a href="#">SHOP GRIP TRIP</a>
          </div>
        </SwiperSlide>

        {/* 3번째 배너 */}
        <SwiperSlide>
          <img src={banner3} alt="배너3" />
          <div className="banner-text banner-text-3">
            <span className="span3">LIMITED EDITION</span>
            <h2 className="h23">SALTED CARAMEL <br />COLLECTION</h2>
            <p className="p3">
              A scent so yummy, we brought it back in your fave <br />hydration essentials—including Butta Drop Body Milk.
            </p>
            <a className="a3" href="#">SHOP NOW</a>
          </div>
        </SwiperSlide>

        {/* 4번째 배너 */}
        <SwiperSlide>
          <img src={banner4} alt="배너4" />
          <div className="banner-text banner-text-4">
            <h2 className="h23">CATCH YOU IN EVERY <br />COLOR</h2>
            <p className="p3">Swipe on a hue for every mood.</p>
            <a className="a3" href="#">SHOP LIP</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Mainbanner;
