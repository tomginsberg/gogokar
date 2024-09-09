"use client";

import React, {useState} from "react";
import {Label, Select, TextInput, Button, Textarea, Modal} from "flowbite-react";
import {HiOutlineSwitchHorizontal, HiShoppingCart, HiMail, HiPhone} from "react-icons/hi";
import {useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, CardElement} from "@stripe/react-stripe-js";

// Initialize Stripe with your public key
const stripePromise = loadStripe("your-publishable-key-here"); // Replace with your actual publishable key


function RideBookingForm() {
    // get date, from and to from the router
    // navigate("/ride-booking", {
    //                 state: {
    //                     date: selectedDate,
    //                     fromCity: locations.fromCity,
    //                     toCity: locations.toCity,
    //                 },
    //             });
    // is how we get here
    const {state} = useLocation();
    const {date, fromCity, toCity} = state;
    console.log(date);
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setShowModal(true);
    };

    const [locations, setLocations] = useState({
        fromCity: fromCity,
        toCity: toCity,
    });

    // Toggle function to switch the cities
    const toggleCities = () => {
        setLocations((prev) => ({
            fromCity: prev.toCity,
            toCity: prev.fromCity,
        }));
    };

    // toronto location
    const torontoLocations = ["Pearson Airport", "Scarborough Town Centre", "Yorkdale Mall"];
    // kingston location
    const kingstonLocations = ["Kingston Bus Terminal", "Queen's University", "Downtown Kingston"];

    return (
        <>
            <Navbar/>

            <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 pb-16 dark:bg-gray-800">
                <h2 className="mb-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                    Book Your Ride on {date}
                </h2>




                <div className="mb-4 flex items-center justify-between">
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-xs text-gray-600">from</p>
                        <p className="text-lg font-semibold text-blue-700">{locations.fromCity}</p>

                    </div>
                    <HiOutlineSwitchHorizontal
                        onClick={toggleCities}
                        className="cursor-pointer
                        text-2xl text-gray-500 hover:text-green-400"
                    />
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-xs text-gray-600">to</p>
                        <p className="text-lg font-semibold text-blue-700">{locations.toCity}</p>
                    </div>
                </div>


                <form className="space-y-4" onSubmit={handleSubmit}>
                    <hr className="my-4 border-gray-300 dark:border-gray-700"/>
                    <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Trip Details</h2>

                    {/* Pickup Location */}
                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="pickup">Pick-Up Location</Label></div>
                        <Select id="pickup" className="w-full" aria-label="Select pick-up location">
                            {locations.fromCity === "Toronto" ? torontoLocations.map((location) => (
                                <option key={location} value={location}>{location}</option>
                            )) : kingstonLocations.map((location) => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </Select>
                    </div>

                    {/* Drop-Off Location */}
                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="dropoff">Drop-Off Location</Label></div>
                        <Select id="dropoff" className="w-full" aria-label="Select drop-off location">
                            {locations.toCity === "Toronto" ? torontoLocations.map((location) => (
                                <option key={location} value={location}>{location}</option>
                            )) : kingstonLocations.map((location) => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </Select>
                    </div>

                    <hr className="mb-4 border-gray-300 dark:border-gray-700"/>
                    <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Passenger Details</h2>

                    {/* Passenger Details */}
                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="firstName">First Name</Label></div>
                        <TextInput id="firstName" type="text" placeholder="Enter first name" required
                                   className="w-full"/>
                    </div>

                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="lastName">Last Name</Label></div>
                        <TextInput id="lastName" type="text" placeholder="Enter last name" required className="w-full"/>
                    </div>

                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="address1">Address Line 1</Label></div>
                        <TextInput id="address1" type="text" placeholder="Enter address line 1" required
                                   className="w-full"/>
                    </div>

                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="address2">Address Line 2</Label></div>
                        <TextInput id="address2" type="text" placeholder="Enter address line 2" className="w-full"/>
                    </div>

                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="city">City</Label></div>
                        <TextInput id="city" type="text" placeholder="Enter city" required className="w-full"/>
                    </div>

                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="phone">Phone Number</Label></div>
                        <TextInput icon={HiPhone} id="phone" type="tel" placeholder="Enter phone number" required
                                   className="w-full"/>

                    </div>


                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="email">Email Address</Label></div>
                        <TextInput id="email" type="email" icon={HiMail} placeholder="Enter email address" required
                                   className="w-full"/>

                    </div>

                    <hr className="my-4 border-gray-300 dark:border-gray-700"/>

                    <div>

                        <div className="mb-2 ml-1 block"><Label htmlFor="notes">Additional Notes for the Driver</Label>
                        </div>

                        <Textarea id="notes" placeholder="Enter any additional notes" rows={4} className="w-full"/>
                    </div>

                    <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                        <HiShoppingCart className="mr-2 size-5"/>
                        Review and Pay
                    </Button>
                </form>
            </div>

            <Elements stripe={stripePromise}>
                <Modal show={showModal} onClose={() => setShowModal(false)} size="lg" popup={true}>
                    <Modal.Header>
                        <span className="text-xl font-medium text-gray-900 dark:text-white">Review and Pay</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Trip Summary:</strong>
                            </p>
                            <ul className="list-inside list-disc text-gray-600 dark:text-gray-400">
                                <li>
                                    <strong>From:</strong> {locations.fromCity}
                                </li>
                                <li>
                                    <strong>To:</strong> {locations.toCity}
                                </li>
                                <li>
                                    <strong>Date:</strong> {date}
                                </li>
                            </ul>

                            <div className="mt-6">
                                <Label htmlFor="card-element">Enter your payment details:</Label>
                                <CardElement
                                    id="card-element"
                                    className="mt-2 rounded-md border border-gray-300 p-2"
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#32325d',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#fa755a',
                                                iconColor: '#fa755a',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            className="w-full bg-green-600 hover:bg-green-700"
                            onClick={() => {
                                // Here, you would handle the payment confirmation with Stripe
                                alert("Payment completed! Booking confirmed.");
                                setShowModal(false); // Close the modal after completion
                            }}
                        >
                            Complete Booking
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Elements>

            <Footer/>
        </>
    );
};

export default RideBookingForm;