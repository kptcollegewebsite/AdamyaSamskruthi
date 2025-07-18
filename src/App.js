import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactPage from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import WorkshopsPage from "./components/WorkshopsPage";
import Home from "./components/Home/Home";
import Donate from "./components/Donate/Donate";
import Events from "./components/Events/Events";
import EventDetailsPage from "./components/Events/EventDetailsPage";
import Gallery from "./components/Gallery";
import PanchaTatva from "./components/Panchatatva/PanchaTatva";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/panchatatva" element={<PanchaTatva />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
