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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Sign/>}/>
        <Route exact path='/login' element={<LoginId/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/book' element={<Book/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/single/:id' element={<Single/>}/>
        <Route exact path='/booking-confirm/:id' element={<PersonalInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
