import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from "../../footer/Footer";

export default function Contact() {
  return (
    <div style={{ height: "100%", backgroundColor: "#cfb9fb" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{paddingBottom:"50px",fontSize:"50px"}}>Contact Us</h1>
        <div className="contact-sep">
          <div className="contact-container">
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="contact-img1">
                <img src="" alt="" srcset="" />
              </div>
              <h2>Swasthik NJ</h2>
            </div>
            <div>
              <table cellSpacing={20} style={{paddingTop:"20px"}}>
                <tbody>
                  <tr>
                    <th>Email :</th>
                    <td>swastiknj76@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Ph NO :</th>
                    <td>8951192848</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span style={{ display: "flex", alignItems: "center", gap:"20px", paddingTop:"10px" }}>
             <Link style={{color:"black"}} to={"https://www.instagram.com/swasthik_birwa_official/"}><InstagramIcon className='C-IC' style={{ fontSize: "25px"}} /></Link> 
              <Link style={{color:"black"}} to={"https://x.com/swasthik_nj"}><XIcon className='C-IC' style={{ fontSize: "25px"}}></XIcon></Link>
              <Link style={{color:"black"}} to={"https://www.facebook.com/profile.php?id=100070363380180"}><FacebookIcon className='C-IC' style={{ fontSize: "25px"}}></FacebookIcon></Link>
              <Link style={{color:"black"}} to={"https://www.linkedin.com/in/swasthik-nj/"}><LinkedInIcon className='C-IC' style={{ fontSize: "25px"}}></LinkedInIcon></Link>
              <Link style={{color:"black"}} to={"https://github.com/swasthik-nj"}><GitHubIcon  className='C-IC' style={{ fontSize: "25px"}}></GitHubIcon></Link>
          </span>
          </div>

          <div className="contact-container">
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div className="contact-img2">
                
              </div>
              <h2>Sudesh Gowda</h2>
            </div>
            <div>
              <table cellSpacing={20} style={{paddingTop:"20px"}}>
                <tbody>
                  <tr>
                    <th>Email :</th>
                    <td>swastiknj76@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Ph NO :</th>
                    <td>9632303798</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span style={{ display: "flex", alignItems: "center", gap:"20px", paddingTop:"10px" }}>
             <Link style={{color:"black"}}><InstagramIcon className='C-IC' style={{ fontSize: "25px"}} /></Link> 
              <Link style={{color:"black"}}><XIcon className='C-IC' style={{ fontSize: "25px"}}></XIcon></Link>
              <Link style={{color:"black"}}><FacebookIcon className='C-IC' style={{ fontSize: "25px"}}></FacebookIcon></Link>
              <Link style={{color:"black"}}><LinkedInIcon className='C-IC' style={{ fontSize: "25px"}}></LinkedInIcon></Link>
              <Link style={{color:"black"}}><GitHubIcon  className='C-IC' style={{ fontSize: "25px"}}></GitHubIcon></Link>

          </span>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
