// src/components/Today/Today.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Today.scss";

// ✅ 데이터는 따로 파일 안 만들고 바로 JSX 안에서 관리
import today1 from "../../img/today/today01.jpg";
import today1_h from "../../img/today/today01_h.jpg";
import today2 from "../../img/today/today02.jpg";
import today2_h from "../../img/today/today02_h.jpg";
import today3 from "../../img/today/today03.jpg";
import today3_h from "../../img/today/today03_h.jpg";
import today4 from "../../img/today/today04.jpg";
import today4_h from "../../img/today/today04_h.jpg";
import today5 from "../../img/today/today05.jpg";
import today5_h from "../../img/today/today05_h.jpg";
import today6 from "../../img/today/today06.jpg";
import today6_h from "../../img/today/today06_h.jpg";
import today7 from "../../img/today/today07.jpg";
import today7_h from "../../img/today/today07_h.jpg";
import today8 from "../../img/today/today08.jpg";
import today8_h from "../../img/today/today08_h.jpg";
import today9 from "../../img/today/today09.jpg";
import today9_h from "../../img/today/today09_h.jpg";
import today10 from "../../img/today/today10.jpg";
import today10_h from "../../img/today/today10_h.jpg";


const Today = () => {
  const items = [
    {
      id: 1,
      name: "Set it Down Superfine Blurring Setting Powder",
      img: today1,
      hoverImg: today1_h,
      badge: "COMING SOON",
      sizes: "8 shades",
      price: "₩69,500",
    },
    {
      id: 2,
      name: "Grip Trip Hydrating + Plumping Primer",
      img: today2,
      hoverImg: today2_h,
      badge: "NEW",
      price: "₩69,500",
    },
    {
      id: 3,
      name: "Grip Trip Mattifying + Blurring Primer",
      img: today3,
      hoverImg: today3_h,
      badge: "NEW",
      price: "₩69,500",
    },
    {
      id: 4,
      name: "The Mista Hair + Body Fragrance Mist",
      img: today4,
      hoverImg: today4_h,
      badge: "COMING SOON",
      price: "₩42,700",
    },
    {
      id: 5,
      name: "Butta Drop Hydrating Body Mist",
      img: today5,
      hoverImg: today5_h,
      badge: "NEW",
      sizes: "1 size 2 shades",
      price: "₩60,200",
    },
    {
      id: 6,
      name: "Pro Filt’r Hydrating Foundation",
      img: today6,
      hoverImg: today6_h,
      badge: "NEW",
      sizes: "12 shades",
      price: "₩55,000",
    },
    {
      id: 7,
      name: "Diamond Bomb All-Over Diamond Veil",
      img: today7,
      hoverImg: today7_h,
      badge: "COMING SOON",
      sizes: "2 shades",
      price: "₩48,000",
    },
    {
      id: 8,
      name: "Cheeks Out Freestyle Cream Blush",
      img: today8,
      hoverImg: today8_h,
      badge: "NEW",
      sizes: "10 shades",
      price: "₩32,000",
    },
    {
      id: 9,
      name: "Eaze Drop Blurring Skin Tint",
      img: today9,
      hoverImg: today9_h,
      badge: "COMING SOON",
      sizes: "25 shades",
      price: "₩49,000",
    },
    {
      id: 10,
      name: "Killawatt Freestyle Highlighter",
      img: today10,
      hoverImg: today10_h,
      badge: "NEW",
      sizes: "3 shades",
      price: "₩45,000",
    },
  ];

  return (
    <section className="today-section">
      <h2>TODAY’S FORECAST: HOT FENTY FAVES</h2>
      <p>Soak in the sun with the ultimate summer staples.</p>

      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={10}
        slidesPerView={4.6}
        navigation
        scrollbar={{ draggable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="today-card">
              <div className="img-wrap">
                <img src={item.img} alt={item.name} className="default-img" />
                {item.hoverImg && (
                  <img
                    src={item.hoverImg}
                    alt={item.name}
                    className="hover-img"
                  />
                )}

                {/* 텍스트 뱃지 */}
                {item.badge && <span className="badge">{item.badge}</span>}
                {item.extraBadge && (
                  <span className="badge extra">{item.extraBadge}</span>
                )}

                {/* PNG 뱃지 */}
                {item.badgeImg && (
                  <img
                    src={item.badgeImg}
                    alt="badge"
                    className="badge-img"
                  />
                )}

                {/* 하트 버튼 */}
                <button className="wishlist-btn">♡</button>

                {/* CTA 버튼 */}
                <button className="cta-btn">QUICK SHOP</button>
              </div>

              {/* 이름 */}
              <div className="name">{item.name}</div>

              {/* 사이즈 */}
              {item.sizes && <div className="desc">{item.sizes}</div>}

              {/* 가격 */}
              <div className="price">{item.price}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Today;
