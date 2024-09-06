"use client";

import React, {useState} from "react";
import {Datepicker, TextInput, Button} from "flowbite-react";
import {HiOutlineSwitchHorizontal} from "react-icons/hi";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router


const BookingComponent: React.FC = () => {
    const navigate = useNavigate();
    // Initialize state with default values for locations
    const [locations, setLocations] = useState({
        fromCity: "Toronto",
        toCity: "Kingston",
    });

    // Toggle function to switch the cities
    const toggleCities = () => {
        setLocations((prev) => ({
            fromCity: prev.toCity,
            toCity: prev.fromCity,
        }));
    };

    const handleBooking = () => {
        // extract the date from the date picker
        const selectedDate = document.getElementById("departure-date")?.getAttribute("value");
        console.log(
            `Booking a ride from ${locations.fromCity} to ${locations.toCity} on ${selectedDate}`
        )
        if (selectedDate) {
            navigate("/ride-booking", {
                state: {
                    date: selectedDate,
                    fromCity: locations.fromCity,
                    toCity: locations.toCity,
                },
            });
        } else {
            alert("Please select a departure date.");
        }
    };


    return (
        <div className="mx-auto max-w-screen-xl px-4 py-2 text-center lg:px-12 lg:py-16">
            <div className="mx-auto max-w-md rounded-lg bg-white p-6 px-4 dark:bg-gray-800">
                <div className="mb-4 flex items-center justify-between">
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-lg font-semibold text-blue-700">{locations.fromCity}</p>
                    </div>
                    <HiOutlineSwitchHorizontal
                        onClick={toggleCities}
                        className="cursor-pointer
                        text-2xl text-gray-500 hover:text-green-400"
                    />
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-lg font-semibold text-blue-700">{locations.toCity}</p>
                    </div>
                </div>
                <hr className="my-4 border-gray-300 dark:border-gray-700"/>


                <div className="mb-4">
                    <Datepicker
                        className="w-full"
                        placeholder="Departure date"
                        aria-label="Select departure date"
                        id="departure-date"
                        // value={selectedDate} // Bind state to the value prop
                        // onChange={(date) => setSelectedDate(date)} // Update state on date change
                    />
                </div>

                <div className="mb-4">
                    <TextInput
                        type="text"
                        placeholder="Promotion code"
                        className="w-full"
                        aria-label="Enter promotion code"
                    />
                </div>

                <Button onClick={handleBooking} className="w-full bg-blue-700 hover:bg-blue-800">
                    Book my ride!
                </Button>
            </div>
        </div>
    );
};

export default BookingComponent;