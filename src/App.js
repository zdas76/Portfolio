import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Navber from './pages/Shared/Navbar';

function App() {
  return (
    <div className="App">

      <Navber></Navber>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
