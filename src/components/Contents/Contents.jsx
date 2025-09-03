import React from "react";
import "./Contents.scss";

// ✅ 이미지 src에서 import
import cont1 from "../../img//contents/content01.jpg";
import cont2 from "../../img//contents/content02.jpg";
import cont3 from "../../img//contents/content03.jpg";

const Contents = () => {
  return (
    <div className="contents">
      {/* 카드 1 */}
      <div className="content-card">
        <img src={cont1} alt="Complexion" />
        <h3>COMPLEXION CHEAT SHEET</h3>
        <p>Find the right base for your face—all in one place.</p>
      </div>

      {/* 카드 2 */}
      <div className="content-card">
        <img src={cont2} alt="Fenty Tips" />
        <h3>FENTY ARTISTRY TIPS</h3>
        <p>Breaking down makeup looks that everyone’s talking about.</p>
      </div>

      {/* 카드 3 */}
      <div className="content-card">
        <img src={cont3} alt="Rihanna" />
        <h3>RIHANNA'S LOOKS</h3>
        <p>All the deetz on Rihanna’s latest beauty looks to recreate at home.</p>
      </div>
    </div>
  );
};

export default Contents;
