import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Formulary from "./components/Formulary";
import Team from "./components/Team";
import Process from "./components/Process";
import { Trust, CtaBand } from "./components/TrustAndCta";
import Footer from "./components/Footer";
import BookingBar from "./components/BookingBar";
import Gallery from "./pages/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Formulary />
      <Team />
      <Process />
      <Trust />
      <CtaBand />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
      <BookingBar />
    </>
  );
}