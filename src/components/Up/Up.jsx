import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Up.scss";

// 데이터
import UpData from "../../data/UpData";

const Up = () => {
  return (
    <section className="up-section">
      <h2>UP TO 60% OFF SELECT ITEMS</h2>
      <p>
        Now’s the time to lock in your faves for the low.
      </p>

      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={true}
        scrollbar={{ draggable: true }}
      >
        {UpData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="product-card">
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

                <button className="wishlist-btn">♡</button>
                <button className="cta-btn">QUICK SHOP</button>
              </div>

              {/* 이름 */}
              <div className="name">{item.name}</div>

              {/* 사이즈/쉐이드 */}
              {item.sizes && <div className="desc">{item.sizes}</div>}
              {item.shades && <div className="shades">{item.shades}</div>}

              {/* 평점 */}
              <div className="rating">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </div>

              {/* 가격 */}
              <div className="price">
                {item.price && (
                  <span className="original">{item.price}</span>
                )}
                <span className="sale">{item.salePrice}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Up;
