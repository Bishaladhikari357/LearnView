import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import Readmore from './Explain/Readmore/Readmore.js';
import Footer from './Components/Footer/Footer.js';
import Webdetails from './Explain/Webdetails/Webdetails.js';
import Network from './Explain/Network/Network.js';
import Market from './Explain/Market/Market.js';
import Appdev from './Explain/Appdev/Appdev.js';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* Routes Definition */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Readmore />} />
          <Route path="/web" element={<Webdetails />} />
          <Route path="/network" element={<Network />} />
          <Route path="/market" element={<Market />} />
          <Route path="/appdev" element={<Appdev />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
