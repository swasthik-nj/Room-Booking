import React from "react";
import logo from "../land-img/first.webp";

import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { rooms } from "../data/data";
export default function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "#050e20" }}>
        <div style={{ zIndex: "20" }}>
          <Navbar />
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          <img
            src={logo}
            alt=""
            srcset=""
            style={{
              width: "90%",
              height: "85vh",
              borderRadius: "10px",
              marginTop: "85px",
            }}
          />
        </div>
      </div>

      {/* <div
        style={{
          height: "50px",
          width: "10rem",
          backgroundColor: "#33665593",
          position: "absolute",
          left: "150vh",
          top: "30vh",
          zIndex: 0,
        }}
      >
        <div id="date">gs</div>
      </div> */}

      <div className="second-part">
        <div className="sec-container">
          <div className="contants">
            <h1
              style={{
                fontSize: "54px",
                paddingLeft: "35px",
                color: "#050e20 ",
              }}
            >
              All facilities makes you Unforgatable memories.
            </h1>
            <h2 style={{ lineHeight: "36px", paddingLeft: "10px" }}>
              Our hotel contain all the hybride facilties Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur atque similique
              vitae repellendus recusandae dicta.
            </h2>
          </div>
          <div className="sec-grid-container">
            <div className="f-first-col"></div>
            <div className="f-sec-col"> </div>
            <div className="f-third-col"> </div>

            <div className="s-first-col">
              <div className="sec-rotate"></div>
            </div>
            <div className="s-sec-col"> </div>
            <div className="s-third-col"> </div>

            <div className="t-first-col"></div>
            <div className="t-sec-col"> </div>
            <div className="t-third-col"> </div>
          </div>
        </div>
      </div>
      <div>
            <h1 style={{backgroundColor:"#122346",color:"#dbd3f4",fontSize:"73px",paddingLeft:"40px"}}>Available Rooms</h1>
      <div className="home-room-container">
        {rooms.slice(0,3).map((room) => (
          <Link className="to-single" to={`/single/${room.id}`}>
          <div className="first-room">
            
              <div className="home-room-name">
                <h1 style={{ paddingLeft: "-10px", fontSize:"36px",fontFamily:"cursive",color:"#122346",fontWeight:"900"}}>{room.roomType}</h1>
              </div>
              <div >
                <img className="home-imgs" src={room.images} alt="" srcset="" />
              </div>
              <div className="home-room-detaild">
                <h2 style={{ lineHeight: "30px", fontSize: "20px", fontWeight:"400"}}>
                 {room.subtitle}
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#f71500",
                    paddingTop: "20px",
                    marginLeft:"-10px",
                    marginRight:"-10px"
                  }}
                >
                  <h3>Price :<span style={{color:"black",fontWeight:"300"}}>{room.pricing.perNight} INR</span></h3>
                  <h3>Size :<span style={{color:"black",fontWeight:"300"}}>{room.roomSize}</span></h3>
                </div>
              </div >
            
          </div>
          </Link>
        ))}
        
        <div style={{marginTop:"30px"}}>
          <Link className="to-book" to={'/book'}>Explore more</Link>
        </div>
      </div>
      </div>
     
    </div>
  );
}
