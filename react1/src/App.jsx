import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header.jsx";
import Features from './Components/Features.jsx';
import Enterprise from './Components/Enterprise.jsx';
import Support from './Components/Support.jsx';
import Home from './Components/Home.jsx';
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/Features" element={<Features />} />
            <Route path="/Enterprise" element={<Enterprise />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer title1="Features" input1="cool stuff" input2="Random feature" input3="Team Feature" title2="Resources" input4="Resources" input5="Resource name" title3="About" input6="Team" input7="Locations" />
       
      </div>
    </Router>
  );
}

export default App;
