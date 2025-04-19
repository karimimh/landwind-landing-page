import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CustomerLogos from "./components/CustomerLogos";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <CustomerLogos />
    </div>
  );
}

export default App;
