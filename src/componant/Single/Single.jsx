import "../Single/single.css";
import { Link, useParams } from "react-router-dom";
import { rooms } from "../../data/data";
import Navbar from "../Navbar/Navbar";

export default function Single() {
  const OrderConfirm = () => {
    if (window.confirm("Are you sure you want to book this room?")) {
      // Proceed with booking
    }
    
  };

  const { id } = useParams();
  const [singleroom] = rooms.filter((r) => r.id === id);

  return (
    <div>
      <Navbar />
      <div className="item-container" id="book-ready">
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            backgroundColor: "#fafafa",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 10px 25px rgba(15, 15, 15, 0.056)",
          }}
        >
          <div className="item-details">
            <div>
              <img
                className="img-container"
                src={singleroom.images}
                alt={singleroom.roomType}
              />
            </div>
            <div className="bed-type-container">
              <div className="bed-type">
                <h1>{singleroom.roomType}</h1>
              </div>
              <div className="price-book">
                <h2>
                  {singleroom.pricing.perNight} &#8377;
                  <span>/night</span>
                </h2>
                <h3>Ratings: 4.8 ★</h3>
              </div>
              <div className="amenities-container">
                <div className="amenity-item">
                  <div className="amenity-icon">🛏️</div>
                  <div className="amenity-text">Extra Bedsheet</div>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🚿</div>
                  <div className="amenity-text">1 Bathroom</div>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">👔</div>
                  <div className="amenity-text">Dress Block</div>
                </div>
              </div>
              <div className="book-now-container">
                <Link
                  onClick={OrderConfirm}
                  className="book-ready"
                  to={`/booking-confirm/${singleroom.id}`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          <div className="room-description-container">
            <h1 className="description-title">
              More about {singleroom.roomType}
            </h1>
            <p className="description-text">
              {singleroom.description}
              <span>
                Our rooms are designed with your comfort in mind, featuring
                premium amenities and thoughtful touches to ensure a memorable
                stay. Enjoy the perfect blend of luxury and convenience in a
                serene atmosphere that makes you feel right at home.
              </span>
            </p>

            <h2 className="services-title">Available Services</h2>
            <div className="services-container">
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Free Wi-Fi</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Room Service</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Daily Housekeeping</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Minibar</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Breakfast Included</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Smart TV</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Air Conditioning</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✓</div>
                <div className="service-text">Work Desk</div>
              </div>
            </div>

            <div className="bottom-cta">
              <h2>
                Experience luxury like never before. Book your stay today!
              </h2>
              <a href="#book-ready" className="scroll-top">
                Book Now ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
