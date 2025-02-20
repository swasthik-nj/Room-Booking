// ContactForm.jsx
import React, { useState } from 'react';
import './personal.css';
import { useParams } from 'react-router-dom';
import { rooms } from '../../data/data';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    checkIn:'',
    checkOut:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const { id } = useParams("id");
  const [booking] = rooms.filter((data) => data.id === id);

  return (
    <div className="form-container">
      <div className="content-wrapper">
        {/* Contact Form Section */}
        <div className="form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact Information</h2>
            
            <div className="name-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
         {/* check in-out    */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="check-timeout">
          <div className="check-in">
            <h4>Check In</h4>
            <input type="date" name="check-in"required id="" />
          </div>
          <div className="check-out">
            <h4>Check Out</h4>
            <input type="date" name="check-out" required id="" />
          </div>
        </div>
        </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Room Details Section */}
        <div style={{width:"fit-content"}}>
        

        <div className="room-details">
          <h1>Room Details</h1>
          <div style={{display:"flex", gap:"10px"}}>
          <div className="room-img">
            <img className='room-img' src={booking.images} alt="" srcset="" />
          </div>
          <div className="room-info">
            <h3>{booking.roomType}</h3>
            <div style={{display:"flex",fontSize:"14px"}}>
            <p>{booking.starRating}</p>
            <p>({booking.customerRating})</p>
            </div>
            <p className="price">Price:<span style={{color:"#573", fontSize:"1.3rem",backgroundColor:"none",paddingLeft:"7px",fontWeight:"200"}}>{booking.pricing.perNight}<span style={{fontSize:"15PX",paddingLeft:"5px"}}>{booking.pricing.currency}</span></span>  </p>
          </div>
          </div>
          <div className="facilities">

            <div className="feature-amenties">
            <div>
            <h5>Facilities:</h5>
            {booking?.features?.map((feature) => (
                <ul>
                    <li>{feature}</li>
                  </ul>
                
               ))}
               </div>
               <div style={{marginLeft:"20px"}}>
               <h5>amenities :</h5>
            {booking?.amenities?.map((amenities) => (
               <ul>
                    <li>{amenities}</li>
                  </ul>
                ))}
               </div>
             </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;