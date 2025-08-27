import React, { useEffect, useState } from "react";
import supabase from "../../helper/supabaseClient";
import { Link } from "react-router-dom";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooking() {
      try {
        console.log("Fetching user session");

        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Session error:", sessionError);
          return;
        }

        const userEmail = sessionData.session?.user?.email;

        if (!userEmail) {
          console.log("No user email found");
          return;
        }

        const { data: userBookings, error: bookingError } = await supabase
          .from("bookings")
          .select("*")
          .eq("email", userEmail);

        if (bookingError) {
          console.error("Booking fetch error:", bookingError);
          setError(bookingError);
          return;
        }

        setBookings(userBookings || []); // ✅ Save to bookings state
        console.log("Fetched bookings:", userBookings);
        console.log("User email from session:", userEmail);


      } catch (err) {
        console.error("Unexpected error:", err);
        setError(err);
      }
    }

    fetchBooking();
  }, []);

  if (error) {
    return <div>Error loading bookings: {error.message}</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings found</div>;
  }

  return (
    <div>
      {bookings.map((booking) => {
        const checkIn = new Date(booking.checkIn);
        const checkOut = new Date(booking.checkOut);
        const diffTime = Math.abs(checkOut - checkIn);
        const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const totalPrice = nights * booking.price;
        const bookingId = booking?.id || "N/A";
        const formattedBookingId = `BK-${bookingId.toString().padStart(6, "0")}`;

        return (
          <div key={booking.id} className="confirmation-container">
            <div className="confirmation-card">
              <div className="confirmation-header">
                <h1>Booking Confirmed!</h1>
                <div className="booking-id">Booking ID: {formattedBookingId}</div>
              </div>

              <div className="confirmation-details">
                <div className="room-section">
                  <h2>Room Details</h2>
                  <div className="room-info-box">
                    <div className="room-type">
                      <span className="label">Room Type:</span>
                      <span className="value">{booking.roomName}</span>
                    </div>
                    <div className="price-info">
                      <span className="label">Price per night:</span>
                      <span className="value price">{booking.price}</span>
                    </div>
                    <div className="stay-details">
                      <div className="check-dates">
                        <div className="check-in">
                          <span className="label">Check-in:</span>
                          <span className="value">{checkIn.toLocaleDateString()}</span>
                        </div>
                        <div className="check-out">
                          <span className="label">Check-out:</span>
                          <span className="value">{checkOut.toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="stay-summary">
                        <div className="nights">
                          <span className="label">Stay Duration:</span>
                          <span className="value">{nights} {nights === 1 ? "night" : "nights"}</span>
                        </div>
                        <div className="total-price">
                          <span className="label">Total Price:</span>
                          <span className="value price">{totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="guest-section">
                  <h2>Guest Information</h2>
                  <div className="guest-info-box">
                    <div className="guest-name">
                      <span className="label">Name:</span>
                      <span className="value">{booking.firstName} {booking.lastName}</span>
                    </div>
                    <div className="contact-info">
                      <div className="email">
                        <span className="label">Email:</span>
                        <span className="value">{booking.email}</span>
                      </div>
                      <div className="phone">
                        <span className="label">Phone:</span>
                        <span className="value">{booking.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="confirmation-footer">
                <p className="thank-you-message">Thank you for choosing our hotel. We look forward to welcoming you!</p>
                <div className="action-buttons">
                  <Link to="/" className="home-button">Return to Home</Link>
                  <button onClick={() => window.print()} className="print-button">Print Confirmation</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyBookings;
