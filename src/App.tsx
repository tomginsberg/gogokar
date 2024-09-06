import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingComponent from "./pages/Home";
import RideBookingForm from "./pages/RideBookingForm";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookingComponent/>}/>
                <Route path="/ride-booking" element={<RideBookingForm/>}/>
            </Routes>
        </Router>
    );
}

export default App;