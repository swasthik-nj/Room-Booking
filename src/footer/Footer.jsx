import React from "react";
import { Link } from "react-router-dom";
import "../footer/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="foot-container">
      <div className="footer-sep">
        <div className="gratitude">
          <h1 className="footer-heading">Swadhisht</h1>
          <p>Thank you so much for your valuable time</p>
          <div className="platform-icons">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingTop: "30px",
              }}
            >
              <Link to="https://www.instagram.com/swasthik_birwa_official/">
                <InstagramIcon className="IC" style={{ fontSize: "30px" }}/>
              </Link>
              <Link to="https://x.com/swasthik_nj">
                <XIcon className="IC" style={{ fontSize: "30px" }}></XIcon>
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100070363380180">
                {" "}
                <FacebookIcon
                  className="IC"
                  style={{ fontSize: "30px" }}
                ></FacebookIcon>
              </Link>
              <Link to="https://www.linkedin.com/in/swasthik-nj">
                {" "}
                <LinkedInIcon
                  className="IC"
                  style={{ fontSize: "30px" }}
                ></LinkedInIcon>
              </Link>
            </span>
          </div>
        </div>
        <div className="footer-con-about">
          <div className="footer-contact">
            <h1 className="footer-heading">Contact us</h1>
            <div className="con-details">
              <p>8951192848</p>
              <p>swastiknj76@gmail.com</p>
              <p>Mangalore,Karnataka</p>
            </div>
          </div>
          <div className="footer-nav">
            <h1 className="footer-heading">Explore</h1>
            <ul>
              <li>
                <Link className="footer-nav-button" to={"/"}>
                  <p>Home</p>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    open_in_new
                  </span>
                </Link>
              </li>
              <li>
                <Link className="footer-nav-button" to={"/about"}>
                  <p>About us</p>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    open_in_new
                  </span>
                </Link>
              </li>
              <li>
                <Link className="footer-nav-button" to={""}>
                  <p>Services</p>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    open_in_new
                  </span>
                </Link>
              </li>
              <li>
                <Link className="footer-nav-button" to={"/contact"}>
                  <p>Contact us</p>
                  <span
                    class="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    open_in_new
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          Copyright &copy; 2025. All Rights Reserved. — Designed with love by{" "}
          <a href="SSS">Swa NJ</a>
        </p>
        <ul>
          <li>Term & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
