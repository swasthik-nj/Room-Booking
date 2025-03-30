import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import supabase from '../../helper/supabaseClient';
import './confirm.css';

const BookingConfirmation = () => {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the most recent booking from Supabase
    const fetchRecentBooking = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('id', { ascending: false })
          .limit(1);

        if (error) {
          throw new Error(error.message);
        }

        if (data && data.length > 0) {
          setBooking(data[0]);
        } else {
          setError('No booking found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBooking();
  }, []);


  const calculateDetails = () => {
    if (!booking) return { nights: 0, totalPrice: 0 };
    
    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);
    const diffTime = Math.abs(checkOut - checkIn);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalPrice = nights * booking.price;
    
    return { nights, totalPrice };
  };

  const { nights, totalPrice } = calculateDetails();
  const bookingId = booking?.id || 'N/A';
  // Generate a formatted booking ID
  const formattedBookingId = `BK-${bookingId.toString().padStart(6, '0')}`;

  if (loading) return <div className="loading">Loading your booking details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!booking) return <div className="error">No booking information found</div>;

  return (
    <div className="confirmation-container">
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
                    <span className="value">{new Date(booking.checkIn).toLocaleDateString()}</span>
                  </div>
                  <div className="check-out">
                    <span className="label">Check-out:</span>
                    <span className="value">{new Date(booking.checkOut).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="stay-summary">
                  <div className="nights">
                    <span className="label">Stay Duration:</span>
                    <span className="value">{nights} {nights === 1 ? 'night' : 'nights'}</span>
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
};

export default BookingConfirmation;