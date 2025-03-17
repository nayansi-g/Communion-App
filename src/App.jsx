
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Header from "./pages/Header";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Support from "./pages/Support";
import Footer from "./pages/Footer";



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
