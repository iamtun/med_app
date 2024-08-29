import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  BookingConsultation,
  InstantConsultation,
  LandingPage,
  Login,
  Navbar,
  SignUp,
} from "./components";

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
          <Route path="/booking-consultation" Component={BookingConsultation} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
