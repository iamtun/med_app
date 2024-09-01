import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  BookingConsultation,
  InstantConsultation,
  LandingPage,
  Login,
  Navbar,
  SignUp,
  ReviewForm,
  Profile,
  ReportsLayout,
} from "./components";
import NotificationProvider from "./context/notification";

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <Navbar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />
          <Route path="/booking-consultation" Component={BookingConsultation} />
          <Route path="/reviews" Component={ReviewForm} />
          <Route path="/profile" Component={Profile} />
          <Route path="/reports" Component={ReportsLayout} />
        </Routes>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
