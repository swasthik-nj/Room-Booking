import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../../footer/Footer";
import { rooms } from "../../data/data";
import { Link } from "react-router-dom";
import "./about.css";

export default function About() {
  // Extract unique features and amenities from all rooms
  const allFeatures = new Set();
  const allAmenities = new Set();
  
  rooms.forEach(room => {
    room.features.forEach(feature => allFeatures.add(feature));
    room.amenities.forEach(amenity => allAmenities.add(amenity));
  });
  
  const featuresArray = Array.from(allFeatures);
  const amenitiesArray = Array.from(allAmenities);
  
  // Find the most luxurious room (highest price)
  const luxuryRoom = [...rooms].sort((a, b) => b.pricing.perNight - a.pricing.perNight)[0];
  
  // Find the budget room (lowest price)
  const budgetRoom = [...rooms].sort((a, b) => a.pricing.perNight - b.pricing.perNight)[0];
  
  // FAQ State and Data
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqData = [
    {
      question: "What time is check-in and check-out?",
      answer: "Our standard check-in time is 11:00 AM and check-out time is 8:00 PM. Early check-in or late check-out may be arranged based on availability for an additional fee."
    },
    {
      question: "Do you offer airport transfers?",
      answer: "Yes, we provide airport transfers for our guests. Complimentary transfers are included for Suite and Presidential Suite bookings. For other room types, transfers can be arranged at an additional cost. Please contact our concierge at least 24 hours in advance to schedule your transfer."
    },
    {
      question: "Is breakfast included in the room rate?",
      answer: "Yes, breakfast is included with most of our room types. Our breakfast buffet is served from 6:30 AM to 10:30 AM daily and features a variety of international and local cuisines."
    },
    {
      question: "Do you have facilities for business meetings or events?",
      answer: "We offer well-equipped conference rooms and banquet halls suitable for business meetings, conferences, weddings, and other events. Our events team will be happy to assist you with planning and customizing your event to meet your specific requirements."
    },
    {
      question: "Is Wi-Fi available in the hotel?",
      answer: "Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms, public areas, and meeting spaces."
    },
    {
      question: "Do you accommodate special dietary requirements?",
      answer: "Absolutely! Our chefs can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and other allergies or restrictions. Please inform us of your needs when making your reservation or upon arrival."
    },
    {
      question: "What amenities are available at the hotel?",
      answer: "Our hotel offers a range of amenities including a swimming pool, spa, fitness center, multiple dining options, 24/7 room service, concierge service, business center, and laundry services. Specific amenities vary by room type as well."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we offer both valet and self-parking options for our guests. Valet parking is available for a fee of ₹500 per day, while self-parking is available at ₹300 per day."
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="about-page">
      <div className="about-hero" style={{ backgroundColor: "#050e20" }}>
        <Navbar />
        <div className="about-hero-content">
          <h1>About Our Hotel</h1>
          <p>Crafting unforgettable experiences since 2020</p>
        </div>
      </div>
      
      <div className="about-section">
        <div className="about-intro">
          <h2>Welcome to Our World of Luxury</h2>
          <p>
            Nestled in the heart of Mangalore, Karnataka, our hotel offers an exceptional blend of comfort, 
            luxury, and personalized service. Whether you're traveling for business or leisure, 
            our dedicated staff ensures your stay is nothing short of perfect.
          </p>
          <p>
            With a wide range of accommodations from budget-friendly rooms to extravagant penthouses,
            we cater to every type of traveler and every budget. Our facilities are designed to 
            make your stay comfortable and memorable.
          </p>
        </div>
        
        <div className="about-facilities">
          <h2>Our Premium Facilities</h2>
          <div className="marquee-container">
            <div className="marquees">
              {featuresArray.map((feature, index) => (
                <div key={index} className="facility-item">
                  <span className="facility-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <h2>Exclusive Amenities</h2>
          <div className="marquee-container reverse">
            <div className="marquees reverse">
              {amenitiesArray.map((amenity, index) => (
                <div key={index} className="amenity-items">
                  <span className="amenity-icons">★</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-testimonial">
          <div className="testimonial-bg"></div>
          <div className="testimonial-content">
            <h2>Guest Experiences</h2>
            <div className="testimonial-quote">
              <p>"An exceptional stay with impeccable service. The room comfort and food quality exceeded our expectations."</p>
              <span className="testimonial-author">- The Sharma Family</span>
            </div>
          </div>
        </div>
        
        <div className="room-highlights">
          <h2>Room Highlights</h2>
          <div className="room-cards">
            <div className="room-card luxury">
              <h3>Luxury Pick</h3>
              <img src={luxuryRoom.images} alt={luxuryRoom.roomType} />
              <div className="room-card-details">
                <h4>{luxuryRoom.roomType}</h4>
                <p>{luxuryRoom.subtitle}</p>
                <div className="room-features">
                  <span>₹{luxuryRoom.pricing.perNight} per night</span>
                  <span>{luxuryRoom.roomSize}</span>
                </div>
                <div className="room-rating">
                  <span>{luxuryRoom.starRating}</span>
                </div>
                <Link to={`/single/${luxuryRoom.id}`} className="view-room-btn">View Details</Link>
              </div>
            </div>
            
            <div className="room-card budget">
              <h3>Budget Pick</h3>
              <img src={budgetRoom.images} alt={budgetRoom.roomType} />
              <div className="room-card-details">
                <h4>{budgetRoom.roomType}</h4>
                <p>{budgetRoom.subtitle}</p>
                <div className="room-features">
                  <span>₹{budgetRoom.pricing.perNight} per night</span>
                  <span>{budgetRoom.roomSize}</span>
                </div>
                <div className="room-rating">
                  <span>{budgetRoom.starRating}</span>
                </div>
                <Link to={`/single/${budgetRoom.id}`} className="view-room-btn">View Details</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hotel-stats">
          <div className="stat-item">
            <h3>{rooms.length}</h3>
            <p>Room Types</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Service</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <h3>5★</h3>
            <p>Premium Experience</p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Ready to Experience Luxury?</h2>
          <p>Book your stay today and enjoy our world-class facilities and exceptional service.</p>
          <Link to="/book" className="cta-button">Book Now</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}