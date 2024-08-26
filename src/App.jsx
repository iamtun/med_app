import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage, Login, Navbar, SignUp } from "./components";

function App() {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
