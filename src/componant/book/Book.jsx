import React from 'react'
import "../book/book.css"
import { Link } from 'react-router-dom'
import { rooms } from '../../data/data'
import Navbar from '../Navbar/Navbar'

export default function Book() {
  let OrderConfirm=()=>alert("Are you sure book this")
  return (
    <div style={{paddingBottom:"20px",backgroundImage:"linear-gradient(rgba(162, 121, 208, 0.999),rgba(30, 54, 114, 0.999))",height:"100vh",overflow:"scroll"}}>
      <Navbar/>
      <div style={{paddingTop:"45px"}}>

      <div className='avl-rooms'>
          <div className="avl-rooms-separator">
            <div className="room-intro">
              <h2 style={{fontSize:"60px",paddingRight:"20px",lineHeight:"78px",color:"rgba(30, 54, 114, 0.999)"}}>Available Rooms are shown here</h2><span style={{paddingTop:"120px",fontSize:"15px"}}>Scroll Down 👉🏿</span>
            </div>
            <div style={{display:"flex",flexDirection:"column", overflow:"scroll", width:"100%", height:"88vh"}}>

              {rooms.map((room) => (
              <div className="room-types">
                
              <div>
                <img className="room-type-img" src={room.images} alt="" srcset="" />
              </div>
              <div className="room-detail-info">
                <div style={{paddingLeft:"30px"}}>
                  <div style={{display:'flex',justifyContent:"space-between"}}>
                    <h1 className='room-name'>{room.roomType}</h1>
                    <div style={{display:"flex",gap:"10px"}}>
                      <p>({room.customerRating})</p>
                      <p>{room.starRating}</p> 
                    </div>
                    
                  </div>
                   <p className='by-info' style={{paddingTop:"10px"}}>{room.subtitle}</p>
                  <div style={{paddingLeft:"15px"}}>
                  <div style={{display:"flex",paddingTop:"25px",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                      <h3 className='by-info'>Details :</h3>
                      <h3 style={{opacity:"1"}}>{room.roomSize}</h3>
                    </div>
                    <div  style={{display:"flex"}}>
                      <h3 className='by-info'>Ph.no :</h3>
                      <h3 style={{opacity:"1"}}>{room.foodAvailability.contactNumber}</h3>
                    </div>
                  </div>
                  <div style={{display:"flex",paddingTop:"8px"}}>
                    <h3 className='by-info'>Price :</h3>
                    <h3 style={{opacity:"1"}}>{room.pricing.perNight} {room.pricing.currency}</h3>
                  </div>
                  
                  </div>
                  <div style={{display:"flex",paddingTop:"20px"}}>
                    <h3 className='by-info'>Features :</h3>
                    <h3 style={{opacity:"1",display:"flex",gap:"30px"}}>
                      <div>{room.features[1]}</div>
                      <div>{room.features[4]}</div>
                      <div>{room.features[3]}</div>
                    </h3>
                  </div>
                </div>
                <div style={{display:"flex",gap:"30px",paddingRight:"70px",paddingTop:"10px",alignItems:"center",justifyContent:"right"}}>
                  <Link className='view-btn' to={`/single/${room.id}`}>View</Link>
                  <Link className='book-btn' onClick={OrderConfirm} to={`/booking-confirm/${room.id}`}>Book</Link>
                </div>
                
              </div>
             
              </div>
               ))}
            </div>
          </div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem sed mollitia provident numquam repudiandae repellat dicta ratione iusto. Porro rem expedita, esse ut repellendus tempora quisquam? Esse illo commodi tenetur reiciendis nihil, nesciunt repudiandae deleniti, ab exercitationem nisi nam delectus? Sunt dignissimos, harum quia error maxime sapiente a nostrum consequuntur eius mollitia ratione. Laboriosam inventore obcaecati incidunt, reiciendis reprehenderit dolor iste suscipit unde temporibus aut nobis error officia deleniti culpa vel minus tempore? Distinctio nobis hic porro aut accusantium optio, delectus eveniet quam possimus cum sint vitae, nemo ad? Libero ipsa saepe officiis sint sunt! Quidem mollitia cupiditate alias.
      </div>
    </div>
  )
}
