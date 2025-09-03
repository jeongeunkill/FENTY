import React from "react";
import "./Brand.scss";

// ✅ src/img에서 import
import hair from "../../img/brand/brand01.jpg";
import beauty from "../../img/brand/brand02.jpg";
import skin from "../../img/brand/brand03.jpg";
import fragrance from "../../img/brand/brand04.jpg";

const Brand = () => {
  const brands = [
    { id: 1, img: hair, title: "FENTY HAIR" },
    { id: 2, img: beauty, title: "FENTY BEAUTY" },
    { id: 3, img: skin, title: "FENTY SKIN" },
    { id: 4, img: fragrance, title: "FENTY FRAGRANCE" },
  ];

  return (
    <section className="brand-section">
      <h2>THE FENTY BEAUTY BRANDS</h2>
      <p>
        Rihanna's vision of haircare, makeup, skincare + fragrance for all.
      </p>

      <div className="brand-list">
        {brands.map((item) => (
          <div className="brand-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
