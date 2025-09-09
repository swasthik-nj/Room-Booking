import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer from "../../footer/Footer";
import LanguageIcon from '@mui/icons-material/Language';


export default function Contact() {
  return (
    <div style={{ backgroundColor: "#cfb9fb" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ paddingBottom: "40px", fontSize: "2.5rem" }}>Contact Us</h1>

        <div className="contact-sep">
          {/* Swasthik Card */}
          <div className="contact-container">
            <div className="profile">
              <div className="contact-img1"></div>
              <h2>Swasthik NJ</h2>
            </div>

            <table cellSpacing={15} style={{ margin: "20px auto" }}>
              <tbody>
                <tr>
                  <th>Email :</th>
                  <td>swastiknj76@gmail.com</td>
                </tr>
                <tr>
                  <th>Ph No :</th>
                  <td>8951192848</td>
                </tr>
              </tbody>
            </table>

            <span className="icons">
              <Link to="https://www.instagram.com/swasthik_birwa_official/" target="_blank"><InstagramIcon className="C-IC" /></Link>
              <Link to="https://x.com/swasthik_nj" target="_blank"><XIcon className="C-IC" /></Link>
              <Link to="https://www.facebook.com/profile.php?id=100070363380180" target="_blank"><FacebookIcon className="C-IC" /></Link>
              <Link to="https://www.linkedin.com/in/swasthik-nj/" target="_blank"><LinkedInIcon className="C-IC" /></Link>
              <Link to="https://github.com/swasthik-nj" target="_blank"><GitHubIcon className="C-IC" /></Link>
              <Link to="https://swasthik-nj-portfolio.vercel.app/" target="_blank"><LanguageIcon className="C-IC" /></Link>

            </span>
          </div>

          {/* Sudesh Card */}
          <div className="contact-container">
            <div className="profile">
              <div className="contact-img2"></div>
              <h2>Sudesh Gowda</h2>
            </div>

            <table cellSpacing={20}  style={{ margin: "20px auto" }}>
              <tbody>
                <tr>
                  <th>Email :</th>
                  <td>ssudeshgowda@gmail.com</td>
                </tr>
                <tr>
                  <th>Ph No :</th>
                  <td>9632303798</td>
                </tr>
              </tbody>
            </table>

            <span className="icons">
              <Link><InstagramIcon className="C-IC" /></Link>
              <Link><XIcon className="C-IC" /></Link>
              <Link><FacebookIcon className="C-IC" /></Link>
              <Link><LinkedInIcon className="C-IC" /></Link>
              <Link><GitHubIcon className="C-IC" /></Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
