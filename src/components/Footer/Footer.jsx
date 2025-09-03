import React from "react";
import "./Footer.scss";

// ✅ src에서 불러오기
import logo from "../../img/footer/footer_logo.png";
import insta from "../../img/footer/instagram.png";
import tiktok from "../../img/footer/tictok.png";
import facebook from "../../img/footer/Facebook.png";
import twitter from "../../img/footer/twitter.png";
import youtube from "../../img/footer/Youtube.png";
import koreaFlag from "../../img/footer/kr.svg";
import footerImg from "../../img/footer/footer.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* 왼쪽 */}
      <div className="footer-left">
        <div className="subscribe">
          <h3>STAY POSTED + UNLOCK 15% OFF</h3>
          <p>
            Keep up with all things Fenty Beauty + save on your next $35+ order.
          </p>
          <div className="input-box">
            <input type="text" placeholder="Phone" />
            <button className="btn2">→</button>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" />
            <button className="btn1">→</button>
          </div>
          <p className="terms">
            By subscribing to Fenty Beauty, you agree to our{" "}
            <a href="#">Terms of Use</a> and acknowledge our{" "}
            <a href="#">Privacy Policy</a>. and consent to receive a <br /> varying number of marketing messages via email and text. Consent is not a condition of any purchase. Message and data <br /> rates may apply. Reply HELP for help or STOP to opt out. California residents: Please also see our{" "}
            <a href="#">Financial Incentive Terms</a>
          </p>
        </div>

        <img src={logo} alt="Fenty Beauty" className="footer-logo" />
      </div>

      {/* 오른쪽 */}
      <div className="footer-right">
        {/* 고객센터 + ABOUT */}
        <div className="footer-right-top">
          <div className="customer-service">
            <h4>CUSTOMER SERVICE</h4>
            <p>
              Operating hours are from 9am-9pm EST Monday-Friday and <br /> 9am-6pm EST Saturday.
            </p>
            <p>customerservice@fentybeauty.com</p>
            <p>1-855-440-7474</p>
            <ul>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Gift Card Balance</a></li>
            </ul>
          </div>

          <div className="about">
            <div className="about-text">
              <h4>ABOUT</h4>
              <p>
                Rihanna was inspired to create the world of Fenty Beauty brands after years
                of partnering <br /> with the best of the best in the beauty industry—and still
                seeing a void for products that <br /> performed across all skin tones + types and
                hair textures.
              </p>
              <ul>
                <li><a href="#">About the Brands</a></li>
                <li><a href="#">Clara Lionel Foundation</a></li>
                <li><a href="#">Student Discounts</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <img src={footerImg} alt="Rihanna" className="about-img" />
          </div>
        </div>

        {/* ✅ bottom을 따로 분리 */}
        <div className="footer-bottom">
          <div className="footer-bottom-top">
            <div className="social">
              <img src={tiktok} alt="tiktok" />
              <img src={insta} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>

          <div className="footer-bottom-bottom">
            <div className="country">
              <img src={koreaFlag} alt="South Korea" className="flag" />
              <span>South Korea | English</span>
            </div>
  
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Refund Policy</a>
              <a href="#">CA Supply Chain Act</a>
              <a href="#">Canadian Modern Slavery Report</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
