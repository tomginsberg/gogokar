"use client";

import React, {useState} from "react";
import {Label, Select, TextInput, Button, Textarea} from "flowbite-react";
import {HiOutlineSwitchHorizontal, HiShoppingCart, HiMail, HiPhone} from "react-icons/hi";
import {useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-publishable-key-here"); // Replace with your actual publishable key

function RideBookingForm() {
    const {state} = useLocation();
    const {date, fromCity, toCity} = state;

    const [locations, setLocations] = useState({
        fromCity: fromCity,
        toCity: toCity,
    });

    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        phone: "",
        email: "",
        notes: "",
    });

    const handleTripDetailsChange = (field: string, value: string) => {
        console.log(field, value);
        setTripDetails((prev) => ({...prev, [field]: value}));
    };

    const handlePersonalInfoChange = (field: string, value: string) => {
        console.log(field, value);
        setPersonalInfo((prev) => ({...prev, [field]: value}));
    };

    const torontoLocations = ["Pearson Airport", "Scarborough Town Centre", "Yorkdale Mall"];
    const kingstonLocations = ["Kingston Bus Terminal", "Queen's University", "Downtown Kingston"];

    let initialPickup = torontoLocations[0];
    if (fromCity === "Kingston") {
        initialPickup = kingstonLocations[0];
    }
    let initDropoff = kingstonLocations[0];
    if (toCity === "Toronto") {
        initDropoff = torontoLocations[0];
    }

    const [tripDetails, setTripDetails] = useState(
        {pickup: initialPickup, dropoff: initDropoff}
    );


    const [currentStep, setCurrentStep] = useState(1); // State to manage current step

    // Toggle function to switch the cities
    const toggleCities = () => {
        setLocations((prev) => ({
            fromCity: prev.toCity,
            toCity: prev.fromCity,
        }));
        setTripDetails((prev) => ({
            pickup: prev.dropoff,
            dropoff: prev.pickup
        }));
    };

    // Handle Next Step
    const nextStep = () => setCurrentStep((prev) => prev + 1);
    // Handle Previous Step
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    // Handle form submission for Review & Pay
    const handlePayment = () => {
        alert("Payment completed! Booking confirmed.");
        // Process payment with Stripe (implement your logic)
    };

    return (
        <>
            <Navbar/>
            <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 pb-16 dark:bg-gray-800">
                <ol className="mb-8 flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white p-3 text-center text-sm font-medium text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:p-4 sm:text-base rtl:space-x-reverse">
                    <li className={`flex items-center ${currentStep === 1 ? "text-blue-600" : ""}`}>
            <span
                className={`me-2 flex size-5 shrink-0 items-center justify-center rounded-full border ${currentStep >= 1 ? "border-blue-600" : "border-gray-500"} text-xs dark:border-gray-400`}>
              1
            </span>
                        Trip <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
                        <svg className="ms-2 size-3 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                        </svg>
                    </li>
                    <li className={`flex items-center ${currentStep === 2 ? "text-blue-600" : ""}`}>
            <span
                className={`me-2 flex size-5 shrink-0 items-center justify-center rounded-full border ${currentStep >= 2 ? "border-blue-600" : "border-gray-500"} text-xs dark:border-gray-400`}>
              2
            </span>
                        Personal <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
                        <svg className="ms-2 size-3 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                        </svg>
                    </li>
                    <li className={`flex items-center ${currentStep === 3 ? "text-blue-600" : ""}`}>
            <span
                className={`me-2 flex size-5 shrink-0 items-center justify-center rounded-full border ${currentStep >= 3 ? "border-blue-600" : "border-gray-500"} text-xs dark:border-gray-400`}>
              3
            </span>
                        Review & Pay
                    </li>
                </ol>

                {/* Step 1: Trip Info */}
                {currentStep === 1 && (
                    <form className="space-y-4" onSubmit={nextStep}>
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Trip Details for {date}</h2>
                        <div className="mb-4 flex items-center justify-between">
                            <div className="w-20 shrink-0 text-center">
                                <p className="text-xs text-gray-600">from</p>
                                <p className="text-lg font-semibold text-blue-700">{locations.fromCity}</p>
                            </div>
                            <HiOutlineSwitchHorizontal
                                onClick={toggleCities}
                                className="cursor-pointer text-2xl text-gray-500 hover:text-green-400"
                            />
                            <div className="w-20 shrink-0 text-center">
                                <p className="text-xs text-gray-600">to</p>
                                <p className="text-lg font-semibold text-blue-700">{locations.toCity}</p>
                            </div>
                        </div>
                        {/* Pickup Location */}
                        <div>
                            <Label htmlFor="pickup">Pick-Up Location</Label>
                            <Select
                                value={tripDetails.pickup}
                                onChange={(e) => handleTripDetailsChange('pickup', e.target.value)}
                                id="pickup" className="w-full" aria-label="Select pick-up location">
                                {locations.fromCity === "Toronto"
                                    ? torontoLocations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))
                                    : kingstonLocations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}
                            </Select>
                        </div>

                        {/* Drop-Off Location */}
                        <div>
                            <Label htmlFor="dropoff">Drop-Off Location</Label>
                            <Select
                                value={tripDetails.dropoff}
                                onChange={(e) => handleTripDetailsChange('dropoff', e.target.value)}
                                id="dropoff" className="w-full" aria-label="Select drop-off location">
                                {locations.toCity === "Toronto"
                                    ? torontoLocations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))
                                    : kingstonLocations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}
                            </Select>
                        </div>

                        <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                            Next: Personal Info
                        </Button>
                    </form>
                )}

                {/* Step 2: Personal Info */}
                {currentStep === 2 && (
                    <form className="space-y-4" onSubmit={nextStep}>
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Passenger Details</h2>
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <TextInput
                                value={personalInfo.firstName}
                                onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                                id="firstName" type="text" placeholder="Enter first name" required
                                className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <TextInput
                                value={personalInfo.lastName}
                                onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                                id="lastName" type="text" placeholder="Enter last name" required
                                className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="address1">Address Line 1</Label>
                            <TextInput
                                value={personalInfo.address1}
                                onChange={(e) => handlePersonalInfoChange('address1', e.target.value)}
                                id="address1" type="text" placeholder="Enter address line 1" required
                                className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="address2">Address Line 2</Label>
                            <TextInput
                                value={personalInfo.address2}
                                onChange={(e) => handlePersonalInfoChange('address2', e.target.value)}
                                id="address2" type="text" placeholder="Enter address line 2" className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="city">City</Label>
                            <TextInput
                                value={personalInfo.city}
                                onChange={(e) => handlePersonalInfoChange('city', e.target.value)}
                                id="city" type="text" placeholder="Enter city" required className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <TextInput
                                value={personalInfo.phone}
                                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                                icon={HiPhone} id="phone" type="tel" placeholder="Enter phone number" required
                                className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="email">Email Address</Label>
                            <TextInput
                                value={personalInfo.email}
                                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                                id="email" type="email" icon={HiMail} placeholder="Enter email address" required
                                className="w-full"/>
                        </div>

                        <div>
                            <Label htmlFor="notes">Additional Notes for the Driver</Label>
                            <Textarea
                                value={personalInfo.notes}
                                onChange={(e) => handlePersonalInfoChange('notes', e.target.value)}
                                id="notes" placeholder="Enter any additional notes" rows={4} className="w-full"/>
                        </div>

                        <div className="flex justify-between">
                            <Button type="button" onClick={prevStep} className="bg-gray-500 hover:bg-gray-600">
                                Previous: Trip Info
                            </Button>
                            <Button type="submit" className="bg-blue-700 hover:bg-blue-800">
                                Next: Review & Pay
                            </Button>
                        </div>
                    </form>
                )}

                {/* Step 3: Review & Pay */}
                {currentStep === 3 && (
                    <div className="space-y-4">
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Review & Pay</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Trip Summary:</strong>
                        </p>
                        <ul className="list-inside list-disc text-gray-600 dark:text-gray-400">
                            <li>
                                <span className="font-semibold">From:</span> {locations.fromCity}
                            </li>
                            <li>
                                <span className="font-semibold">To:</span> {locations.toCity}
                            </li>
                            <li>
                                <span className="font-semibold">Pick-Up:</span> {tripDetails.pickup}
                            </li>
                            <li>
                                <span className="font-semibold">Drop-Off:</span> {tripDetails.dropoff}
                            </li>
                            <li>
                                <span className="font-semibold">Date:</span> {date}
                            </li>
                            <li>
                                <span className="font-semibold">Passenger:</span> {personalInfo.firstName}{" "}
                                {personalInfo.lastName}
                            </li>
                            <li>
                                <span className="font-semibold">Phone:</span> {personalInfo.phone}
                            </li>
                            <li>
                                <span className="font-semibold">Email:</span> {personalInfo.email}
                            </li>
                        </ul>

                        <div className="mt-6">
                            <Label htmlFor="card-element">Enter your payment details:</Label>
                            <Elements stripe={stripePromise}>
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
                            </Elements>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <Button type="button" onClick={prevStep} className="bg-gray-500 hover:bg-gray-600">
                                Previous: Personal Info
                            </Button>
                            <Button
                                type="button"
                                onClick={handlePayment}
                                className="bg-green-600 hover:bg-green-700"
                            >
                                Complete Booking
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default RideBookingForm;