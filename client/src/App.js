import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound.jsx';
import Policy from './Pages/Policy';
import Category from './Pages/Category.jsx'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/category' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
