import logo from "./logo.svg";
import "./App.css";
import { Navbarz } from "./components/NavBar";
import { Banner } from "./components/Banner.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbarz />
      <Banner />
    </div>
  );
}

export default App;
