import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingComponent from "./pages/Home";
import RideBookingForm from "./pages/BookingForm";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";

function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<BookingComponent/>}/>
                <Route path="/book" element={<RideBookingForm/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/policies" element={<Policies/>}/>
            </Routes>
        </Router>
    );
}

export default App;