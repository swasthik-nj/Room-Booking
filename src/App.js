import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componant/Home';
import About from './componant/about/About';
import Book from './componant/book/Book';
import Contact from './componant/contact/Contact';
import Single from './componant/Single/Single';
import PersonalInfo from './componant/personalDetails/PersonalInfo';
import Sign from './componant/SignIn/Sign';
import LoginId from './componant/login/LoginId';
import Wrapper from './componant/Wrapper';
import Confirm from './componant/Confirm/Confirm';
import MyBookings from './componant/mybookings/MyBookings';
import NotFound  from './componant/notfound/NotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public pages (no wrapper) */}
          <Route path="/signin" element={<Sign />} />
          <Route path="/login" element={<LoginId />} />

          {/* Protected pages (with Wrapper) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/single/:id" element={<Wrapper><Single /></Wrapper>} />
          <Route path="/booking-confirm/:id" element={<Wrapper><PersonalInfo /></Wrapper>} />
          <Route path="/book-conformed" element={<Wrapper><Confirm /></Wrapper>} />
          <Route path="/mybookings" element={<Wrapper><MyBookings /></Wrapper>} />

          {/* Catch all → NotFound */}
          <Route path="*" element={<Wrapper><NotFound /></Wrapper>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
