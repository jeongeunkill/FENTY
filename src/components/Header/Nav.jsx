import React, { useState } from "react";
import navData from "../../data/navData";
import "./Header.scss";

const Nav = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (id) => setActiveMenu(id);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <nav className="nav">
      <ul className="nav-main">
        {navData.map((section) => (
          <li
            key={section.id}
            className={`nav-item ${section.title === "Sale" ? "sale" : ""}`}
            onMouseEnter={() => handleMouseEnter(section.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-title">
              {section.title}
            </a>

            {/* ▼ 2depth */}
            <div
              className={`nav-sub ${activeMenu === section.id ? "active" : ""}`}
            >
              <div className="nav-sub-content">
                {/* ===== 왼쪽 메뉴 ===== */}
                {section.leftMenu && (
                  <div className="sub-left">
                    <ul>
                      {section.leftMenu.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ===== 오른쪽 콘텐츠 ===== */}
                <div className="sub-right">
                  {/* 👉 여러 개의 배너 */}
                  {section.banners && (
                    <div className="banner-group">
                      {section.banners.map((banner, idx) => (
                        <div key={idx} className="banner">
                          <img
                            src={banner.img}
                            alt={banner.title}
                            className="banner-img"
                          />
                          <div className="banner-content">
                            {banner.subtitle && (
                              <span className="subtitle">
                                {banner.subtitle}
                              </span>
                            )}
                            <h3>{banner.title}</h3>
                            <p>{banner.desc}</p>
                            <a
                              href={banner.btnLink}
                              className={`banner-btn ${
                                banner.btnType || "white"
                              }`}
                            >
                              {banner.btnText}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 👉 단일 배너 */}
                  {section.banner && (
                    <div className="banner">
                      <img
                        src={section.banner.img}
                        alt={section.banner.title}
                        className="banner-img"
                      />
                      <div className="banner-content">
                        <h3>{section.banner.title}</h3>
                        <p>{section.banner.desc}</p>
                        <a
                          href={section.banner.btnLink}
                          className={`banner-btn ${
                            section.banner.btnType || "white"
                          }`}
                        >
                          {section.banner.btnText}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* 👉 왼쪽 Swiper */}
                  {section.leftSwiper && (
                    <div className="left-swiper">
                      <div className="swiper-wrapper">
                        {section.leftSwiper.map((slide, idx) => (
                          <div key={idx} className="swiper-slide">
                            <img src={slide.img} alt={slide.title} />
                            <div className="slide-content">
                              <h4>{slide.title}</h4>
                              <p>{slide.desc}</p>
                              <a href={slide.btnLink} className="slide-btn">
                                {slide.btnText}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 👉 제품 카드 */}
                  {section.products &&
                    section.products.map((item, idx) =>
                      item.type === "banner" ? (
                        <div key={idx} className="banner small-banner">
                          <img src={item.img} alt="banner" className="banner-img" />
                        </div>
                      ) : (
                        <div key={idx} className="product-card">
                          <div className="img-wrap">
                            <img
                              src={item.img}
                              alt={item.name || "product"}
                              className="default-img"
                            />
                            {item.hoverImg && (
                              <img
                                src={item.hoverImg}
                                alt="hover"
                                className="hover-img"
                              />
                            )}
                            {item.badgeImg && (
                              <img
                                src={item.badgeImg}
                                alt="badge"
                                className="badge-img"
                              />
                            )}
                            <button className="wishlist-btn">♡</button>
                            {item.cta && (
                              <button className={`cta-btn ${item.ctaType}`}>
                                {item.cta}
                              </button>
                            )}
                          </div>

                          {item.name && <p className="name">{item.name}</p>}
                          {item.shades && (
                            <p className="shades">
                              <a href="#">{item.shades}</a>
                            </p>
                          )}
                          {item.desc && <p className="desc">{item.desc}</p>}
                          <p className="price">
                            {item.salePrice ? (
                              <>
                                <span className="original">{item.price}</span>
                                <span className="sale">{item.salePrice}</span>
                              </>
                            ) : (
                              item.price
                            )}
                            {item.extraText && (
                              <span className="extra">{item.extraText}</span>
                            )}
                          </p>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
