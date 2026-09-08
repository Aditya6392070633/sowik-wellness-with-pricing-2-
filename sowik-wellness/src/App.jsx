import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Formulary from "./components/Formulary";
import Team from "./components/Team";
import Process from "./components/Process";
import { Trust, CtaBand } from "./components/TrustAndCta";
import Footer from "./components/Footer";
import BookingBar from "./components/BookingBar";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Formulary />
        <Team />
        <Process />
        <Trust />
        <CtaBand />
      </main>
      <Footer />
      <BookingBar />
    </>
  );
}
