import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Home from './routes/About';
import Home from './routes/Service';
import Home from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Navbar></Navbar>
      
      
    </div>
  );
}

export default App;
