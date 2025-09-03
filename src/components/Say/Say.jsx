// src/components/Say/Say.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Say.scss";

// ✅ src/img에서 직접 불러오기 (8개)
import say1 from "../../img/say/say01.jpg";
import say2 from "../../img/say/say02.jpg";
import say3 from "../../img/say/say03.jpg";
import say4 from "../../img/say/say04.jpg";
import say5 from "../../img/say/say05.jpg";
import say6 from "../../img/say/say06.jpg";
import say7 from "../../img/say/say07.jpg";
import say8 from "../../img/say/say08.jpg";

const Say = () => {
  const items = [
    {
      id: 1,
      img: say1,
      date: "DROPPING 9/5",
      title: "READY TO SET IT DOWN?",
      desc: "Set It Down Superfine Blurring Setting Powder sets, extends + defends—without the weight.",
      link: "GET THE DEETZ",
    },
    {
      id: 2,
      img: say2,
      date: "DROPPING 9/1",
      title: "THE MISTA HAIR + BODY FRAGRANCE MIST",
      desc: "The head-turning power of a good hair day, bottled in an irresistible scent.",
      link: "GET THE DEETZ",
    },
    {
      id: 3,
      img: say3,
      date: "",
      title: "TRY THE FENTY FACE",
      desc: "Look like you just did your makeup, all day long.",
      link: "SHOP NOW",
    },
    {
      id: 4,
      img: say4,
      date: "NEW SIZE",
      title: "SET, BLUR + MATTIFY ON THE GO",
      desc: "Rihanna's must-have to blot shine? Mini Invisimatte Instant Setting + Blotting Powder.",
      link: "GET SET",
    },
    {
      id: 5,
      img: say5,
      date: "NEW",
      title: "STUNNA’S GOT A NUDE ATTITUDE",
      desc: "The cult-fave longwear liquid lip, now in 3 high -impact, neutral shades.",
      link: "SHOP STUNNA LIP PAINT",
    },
    {
      id: 6,
      img: say6,
      date: "NEW",
      title: "GLOW, PLUMP AND STRENGTHEN: 3-IN-1 DEW IT ALL SERUM",
      desc: "Meet Dew N Plump Hydrating Nectar Glow Serum.",
      link: "DEW IT ALL",
    },
    {
      id: 7,
      img: say7,
      date: "NEW",
      title: "THE REAL QUICK BRIGHTENING FIX",
      desc: "Wake up your face with Bright Fix Instant Brightening + Blurring Powder.",
      link: "GET IT BRIGHT",
    },
    {
      id: 8,
      img: say8,
      date: "NEW + LIMITED EDITION",
      title: "DIAMOND BOMB COLLECTION",
      desc: "Sparkle hard in Diamond Bomb’s bestselling, pure shimmer for lips, face, eyes + body.",
      link: "SHOP NOW",
    },
  ];

  return (
    <section className="say-section">
      <h2>SAY HELLO TO YOUR NEW GLOW</h2>
      <p>Hit refresh with our latest drops + bestsellers.</p>

      <Swiper
        modules={[Scrollbar, Navigation]}
        spaceBetween={20}
        slidesPerView={3.4} // 네 번째 이미지가 살짝 보이게
        navigation
        scrollbar={{ draggable: true }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="say-card">
              <img src={item.img} alt={item.title} />
              <div className="text-box">
                {item.date && <span className="date">{item.date}</span>}

                {/* 🔹 title 줄바꿈 */}
                {item.id === 4 && (
                  <h3>
                    SET, BLUR + MATTIFY ON THE <br /> GO
                  </h3>
                )}
                {item.id === 5 && (
                  <h3>
                    STUNNA’S GOT A NUDE <br /> ATTITUDE
                  </h3>
                )}
                {item.id === 6 && (
                  <h3>
                    GLOW, PLUMP AND <br />
                    STRENGTHEN: 3-IN-1 DEW IT <br />
                    ALL SERUM
                  </h3>
                )}
                {item.id === 7 && (
                  <h3>
                    THE REAL QUICK <br /> BRIGHTENING FIX
                  </h3>
                )}
                {![4, 5, 6, 7].includes(item.id) && <h3>{item.title}</h3>}

                {/* 🔹 desc 줄바꿈 */}
                {item.id === 1 && (
                  <p>
                    Set It Down Superfine Blurring Setting Powder sets, <br />
                    extends + defends—without the weight.
                  </p>
                )}
                {item.id === 2 && (
                  <p>
                    The head-turning power of a good hair day, bottled in <br />
                    an irresistible scent.
                  </p>
                )}
                {item.id === 4 && (
                  <p>
                    Rihanna&apos;s must-have to blot shine? Mini Invisimatte <br />
                    Instant Setting + Blotting Powder.
                  </p>
                )}
                {item.id === 5 && (
                  <p>
                    The cult-fave longwear liquid lip, now in 3 high <br />
                    -impact, neutral shades.
                  </p>
                )}
                {item.id === 7 && (
                  <p>
                    Wake up your face with Bright Fix Instant Brightening + <br />
                    Blurring Powder.
                  </p>
                )}
                {item.id === 8 && (
                  <p>
                    Sparkle hard in Diamond Bomb’s bestselling, pure <br />
                    shimmer for lips, face, eyes + body.
                  </p>
                )}
                {![1, 2, 4, 5, 7, 8].includes(item.id) && <p>{item.desc}</p>}

                <a href="#">{item.link}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Say;
