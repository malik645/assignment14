import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./components/Navbar";
import Hero from "./home/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
