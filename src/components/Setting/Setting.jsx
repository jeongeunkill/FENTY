import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Setting.scss";

// ✅ src/img에서 이미지 불러오기
import set1 from "../../img/setting/set01.jpg";
import set2 from "../../img/setting/set02.jpg";
import set3 from "../../img/setting/set03.jpg";
import set4 from "../../img/setting/set04.jpg";
import set5 from "../../img/setting/set05.jpg";


const Setting = () => {
  return (
    <section className="setting-section">
      <h2>SETTING SOON: SUMMER SAVINGS</h2>
      <p>Don’t hold back—these dealz are hot.</p>

      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={3.3}   // 👉 3장이 보이고, 4번째가 1/3 정도 보임
        navigation={true}
        scrollbar={{ draggable: true }}
        >
        {/* 카드 1 */}
        <SwiperSlide>
          <div className="setting-card">
            <img src={set1} alt="setting1" />
            <div className="card-text">
              <span>LIMITED TIME</span>
              <h3>UP TO 50% OFF LIP LOVES</h3>
              <p>Hook up with the hottest hues—at even hotter prices.</p>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </SwiperSlide>

        {/* 카드 2 */}
        <SwiperSlide>
          <div className="setting-card">
            <img src={set2} alt="setting2" />
            <div className="card-text">
              <span>LIMITED TIME</span>
              <h3>UP TO 60% OFF FACE FAVES</h3>
              <p>Everything you need to look fresh in a flash.</p>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </SwiperSlide>

        {/* 카드 3 */}
        <SwiperSlide>
          <div className="setting-card">
            <img src={set3} alt="setting3" />
            <div className="card-text">
              <span>LIMITED TIME</span>
              <h3>UP TO 50% OFF BODY</h3>
              <p>Snatch soft, smooth skin all over.</p>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </SwiperSlide>

        {/* 카드 4 */}
        <SwiperSlide>
          <div className="setting-card">
            <img src={set4} alt="setting4" />
            <div className="card-text">
              <span>LIMITED TIME</span>
              <h3>UP TO 50% OFF EYE <br />ESSENTIALS</h3>
              <p>Play up the drama + save some dollas.</p>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </SwiperSlide>

        {/* 카드 5 */}
        <SwiperSlide>
          <div className="setting-card">
            <img src={set5} alt="setting5" />
            <div className="card-text">
              <span>LIMITED TIME</span>
              <h3>UP TO 30% OFF SETS</h3>
              <p>All your routine faves—for less coin.</p>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Setting;
