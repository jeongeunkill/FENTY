import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Fenty.scss";

import Fenty1 from "../../img/fenty/fenty01.jpg";
import Fenty2 from "../../img/fenty/fenty02.jpg";
import Fenty3 from "../../img/fenty/fenty03.jpg";
import Fenty4 from "../../img/fenty/fenty04.jpg";

const Fenty = () => {
  const items = [
    { id: 1, img: Fenty1, title: "TRY ON SHADES", link: "#" },
    { id: 2, img: Fenty2, title: "MEET YOUR MATCH", link: "#" },
    { id: 3, img: Fenty3, title: "CHAT WITH EXPERTS", link: "#" },
    { id: 4, img: Fenty4, title: "SUBSCRIBE TO SAVE", link: "#" },
  ];

  return (
    <section className="fenty-section">
      <h2>FENTY’S GOT YOUR BACK</h2>
      <p>Our exclusive services will answer all your needs.</p>

      <Swiper
        modules={[Scrollbar, Navigation]}
        spaceBetween={20}
        slidesPerView={3.4} // 네 번째 카드가 살짝 보이게
        navigation
        scrollbar={{ draggable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="fenty-card">
              <img src={item.img} alt={item.title} />
              <div className="fenty-text">
                <h3>{item.title}</h3>
                <a href={item.link}>Learn More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Fenty;
