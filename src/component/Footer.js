import React from "react";
import "./Footer.css";
import { footerLinks } from "../data";
import FooterLogo from "../images/footer-logo.webp";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import likedin from "../images/linked-in.svg";
import youtube from "../images/youtube.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={FooterLogo} alt="" />
          </div>
          {footerLinks.map((link) => {
            const {
              id,
              title,
              link1,
              link2,
              link3,
              link4,
              link5,
              link6,
              link7,
              linkBottom,
            } = link;
            return (
              <div className="title" key={id}>
                <p>{title}</p>
                <div className="link-container">
                  <li>
                    <a href="">{link1}</a>
                  </li>
                  <li>
                    <a href="">{link2}</a>
                  </li>
                  <li>
                    <a href="">{link3}</a>
                  </li>
                  <li>
                    <a href="">{link4}</a>
                  </li>
                  <li>
                    <a href="">{link5}</a>
                  </li>
                  <li>
                    <a href="">{link6}</a>
                  </li>
                  <li>
                    <a href="">{link7}</a>
                  </li>
                </div>
                <div className="link-bottom">
                  <a href="">{linkBottom}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* sub footer */}
      <div className="sub-footer">
        <div className="sub-footer-link">
          <span href="">English</span>
          <span href="">Privacy policy</span>
          <span href="">Terms</span>
          <span href="">Modern Slavery Act</span>
          <span href="">Impressum</span>
          <span>Copyright &#169; 2030 Atlassian</span>
        </div>
        <div className="social-links">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={likedin} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
