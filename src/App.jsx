import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./Landing_Page/Landing_Page";

function App() {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
