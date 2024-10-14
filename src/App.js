import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
