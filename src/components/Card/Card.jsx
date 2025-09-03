import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Card.scss";

// 이미지 import (src 폴더 내부라 그대로 사용 가능)
import pro01 from "../../img/card/card01_.jpg";
import pro02 from "../../img/card/card02_.jpg";
import pro03 from "../../img/card/card03_.jpg";
import pro04 from "../../img/card/card04_.jpg";
import pro05 from "../../img/card/card05_.jpg";
import pro06 from "../../img/card/card06_.jpg";
import pro07 from "../../img/card/card07_.jpg";
import pro08 from "../../img/card/card08_.jpg";
import pro09 from "../../img/card/card09_.jpg";
import pro10 from "../../img/card/card10_.jpg";
import pro11 from "../../img/card/card11_.jpg";
import pro12 from "../../img/card/card12_.jpg";
import pro13 from "../../img/card/card13_.jpg";
import pro14 from "../../img/card/card14_.jpg";
import pro15 from "../../img/card/card15_.jpg";

const cardData = [
  { id: 1, video: "/videos/card01.mp4", productImg: pro01, name: "Hydra Vizor Huez SPF 30 Refillable Tinted Moisturizer Set", price: "₩39,500" },
  { id: 2, video: "/videos/card02.mp4", productImg: pro02, name: "The Clear Thinker Clarifying Shampoo", price: "₩37,600" },
  { id: 3, video: "/videos/card03.mp4", productImg: pro03, name: "We're Even Hydrating Longwear Concealer — 345C", price: "₩92,100" },
  { id: 4, video: "/videos/card04.mp4", productImg: pro04, name: "Dew N Plump Hydrating Nectar Glow Serum", price: "₩75,000" },
  { id: 5, video: "/videos/card05.mp4", productImg: pro05, name: "Hydra Vizor Huez SPF 30 Refillable Tinted Moisturizer Set", price: "₩42,000" },
  { id: 6, video: "/videos/card06.mp4", productImg: pro06, name: "Body Lava Body Luminizer — Penny Drop", price: "₩32,000" },
  { id: 7, video: "/videos/card07.mp4", productImg: pro07, name: "Invisimatte Instant Setting + Blotting Powder", price: "₩29,000" },
  { id: 8, video: "/videos/card08.mp4", productImg: pro08, name: "Trace'd Out Longwear Waterproof Pencil Lip Liner — I Woodn't", price: "₩45,000" },
  { id: 9, video: "/videos/card09.mp4", productImg: pro09, name: "Butta Drop Whipped Oil Body Cream with Tropical Oils + Shea Butter — Guava Getaway", price: "₩21,000" },
  { id: 10, video: "/videos/card10.mp4", productImg: pro10, name: "Gloss Bomb Ice Cooling Lip Luminizer — Cucum'brrr", price: "₩52,000" },
  { id: 11, video: "/videos/card11.mp4", productImg: pro11, name: "Gloss Bomb Stix High-Shine Gloss Stick — Black'r Berry", price: "₩45,600" },
  { id: 12, video: "/videos/card12.mp4", productImg: pro12, name: "Fenty Parfum Hair + Body Mist", price: "₩68,000" },
  { id: 13, video: "/videos/card13.mp4", productImg: pro13, name: "Hydra Vizor Huez SPF 30 Refillable Tinted Moisturizer Set", price: "₩55,000" },
  { id: 14, video: "/videos/card14.mp4", productImg: pro14, name: "Invisimatte Instant Setting + Blotting Powder", price: "₩34,500" },
  { id: 15, video: "/videos/card15.mp4", productImg: pro15, name: "Gloss Bomb Oil Luminizing Lip Oil 'N Gloss — Miss Jellyfish", price: "₩29,800" },
];

const Card = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const handleSlideChange = () => {
      const videos = document.querySelectorAll(".video");

      videos.forEach((video, idx) => {
        const centerIndex = swiper.activeIndex; // 현재 활성화된 인덱스
        if (idx === centerIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    };

    swiper.on("slideChange", handleSlideChange);
    handleSlideChange();

    return () => swiper.off("slideChange", handleSlideChange);
  }, []);

  return (
    <>
      <section className="card-section">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation
          slidesPerView={6}
          spaceBetween={1}
          centeredSlides={true}
          initialSlide={3}
          loop={true}
        >
          {cardData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="video-card">
                {/* ✅ 비디오 경로 수정 */}
                <video
                  src={process.env.PUBLIC_URL + item.video}
                  muted
                  loop
                  playsInline
                  className="video"
                />
                <div className="product-info">
                  <img src={item.productImg} alt={item.name} />
                  <div className="col">
                    <p className="name">{item.name}</p>
                    <p className="price">{item.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ✅ 프로모션 비디오 배너 */}
      <section className="promo-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="promo-video"
        >
          <source
            src={process.env.PUBLIC_URL + "/videos/banner.mp4"}
            type="video/mp4"
          />
          <p>브라우저가 영상을 지원하지 않습니다.</p>
        </video>
      </section>
    </>
  );
};

export default Card;
