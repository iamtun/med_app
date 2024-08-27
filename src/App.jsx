import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { InstantConsultation, LandingPage, Login, Navbar, SignUp } from "./components";

function App() {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
