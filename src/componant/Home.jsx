import React from "react";
import logo from "../land-img/first.webp";

import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { rooms } from "../data/data";
import Footer from "../footer/Footer";
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
            Our hotel offers comfortable and stylish rooms for all types of travelers. Whether you're traveling alone, with family, or for business,With friendly service and a relaxing atmosphere, we make your stay enjoyable and hassle-free.
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
            <h1 className="scrollring" style={{backgroundColor:"#122346",color:"#dbd3f4",fontSize:"73px",paddingLeft:"30px"}}>Available Rooms</h1>
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
     
{/* recipe container */}

      <div className="rec-container">
      <h1 style={{backgroundColor:"#0c265b",color:"#dbd3f4",fontSize:"68px",paddingLeft:"40px",paddingTop:"80px"}}> Explore Our Delicious Options 🍽️!</h1>


      <div className="active-sep">
        <div
          style={{
            height: "80vh",
            width: "35%",
            // alignItems: "center",
            // paddingTop:"80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "480px",marginTop:"0px" }}>
            <h1
              style={{
                padding: "5px 0 40px 0",  
                fontSize: "50px",
                color: "#06c222",
                transform:"rotate(-5deg)"
              }}
            >
              Food Makes Your
              <span style={{ fontSize: "65px", color: "#88af3b",paddingLeft:"10px"}}>
                Happiness
              </span>
            </h1>
            <h2 className="h2-sub-food">
            Our food facility offers a wide variety of delicious and freshly prepared meals to satisfy every craving. From wholesome breakfast options to hearty lunches and flavorful snacks, we have something for everyone. We prioritize hygiene, quality, and freshness, ensuring every bite is both tasty and nutritious.
            </h2>
          </div>
        </div>




        <div class="img-holder">
						<div class="imgs-grid">
							<div class="grid grid-1"><img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="img"></img></div>
							<div class="grid grid-2"><img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505" alt="img"></img></div>
							<div class="grid grid-3"><img src="https://thumbs.dreamstime.com/b/navratri-upwas-thali-fasting-food-platter-consumed-ekadashi-india-hindu-religion-includes-sago-khichadi-aloo-sabji-159829566.jpg"alt="img"></img></div>
						</div>
					</div>
        
      </div>
      
    
    </div>
    <Footer/>
    </div>
  );
}
