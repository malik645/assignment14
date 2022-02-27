import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Hero from "./home/Hero";
import Cards from "./components/cards/Cards";
import { cardData } from "./constant/CardData";
import ContactUs from "./home/ContactUs";
import ServiceCard from "./components/cards/ServiceCard";
import { serviceCardData } from "./constant/ServiceCardData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards cardsArray={cardData} />
      <ContactUs />
      <ServiceCard serviceCardArray={serviceCardData} />
    
    </div>
    
  );
  
}

export default App;
