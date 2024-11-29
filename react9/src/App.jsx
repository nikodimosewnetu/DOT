import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './components/Features';
import Enterprise from './components/Enterprise';
import Support from './components/Support';
import CompanyName from './components/CompanyName';

function App() {
  return (
    <Router>
      <div>
        
        <header>
          <NavBar />
        </header>
       
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/support" element={<Support />} />
            <Route path="/company" element={<CompanyName />} />
          </Routes>
        </main>

        <hr />
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
