import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/NavBar";
import { Banner } from "./components/Banner.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
