import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSections from "./components/HeroSections";
import ContactPage from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProgramsPage from "./components/ProgramsPage";
import WorkshopsPage from "./components/WorkshopsPage";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
