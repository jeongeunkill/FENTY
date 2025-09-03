import React, { useState, useEffect } from "react"; 
import "./Header.scss";
import Nav from "./Nav";

import flag from "../../img/header/kr.svg";
import logo from "../../img/header/fenty_beauty_logo.png";
import icon1 from "../../img/header/search-01.png";
import icon2 from "../../img/header/cart_w.png";
import icon3 from "../../img/header/like_w copy.png";
import icon4 from "../../img/header/mypage_w.png";

const Header = () => {
  const slides = [
    <>
      Free Standard shipping to Korea (South) over ₩98530
      <br />
      Buy a full-size Pro Filt’r Soft Matte Foundation, get a free mini. | SHOP NOW | TERMS
    </>,
    <>
      <span>
        Free Standard shipping to Korea (South) over ₩98530
        <br />
        Free “Friend of Mine” CD with $65+ Smurfs Crew collection purchase. | SHOP NOW | TERMS
      </span>
    </>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true); 
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowPopup(false);
        setIsFixed(true);
      } else {
        setShowPopup(true);
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isFixed ? "fixed" : ""}`}>
      {/* 팝업 배너 */}
      {showPopup && (
        <div className="popup-banner">
          <div className="popup-slide">{slides[currentIndex]}</div>
        </div>
      )}

      <div className="header-top">
        <div className="inner">
          <div className="left">
            <img src={flag} alt="국기" className="flag" />
            <span className="country">South Korea</span>
            <span className="divider">|</span>
            <span className="lang">English</span>
          </div>

          <div className="center">
            <img src={logo} alt="로고" className="logo" />
          </div>

          <div className="right">
            <img src={icon4} alt="마이페이지" className="icon" />
            <a href="#" className="signin">Sign In</a>
            <img src={icon1} alt="검색" className="icon" />
            <img src={icon3} alt="좋아요" className="icon" />
            <img src={icon2} alt="장바구니" className="icon" />
          </div>
        </div>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
