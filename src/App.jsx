import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage, Navbar } from "./components";

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
