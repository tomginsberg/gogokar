"use client";

import {useState} from "react";
import {Label, Select, TextInput, Button, Textarea} from "flowbite-react";
import {
    HiOutlineSwitchHorizontal,
    HiMail,
    HiPhone,
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiShoppingCart,
} from "react-icons/hi";
import {useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, CardElement} from "@stripe/react-stripe-js";
import {IoPersonCircleSharp, IoCar, IoCard} from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";

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

    const stepTrip = () => setCurrentStep(1)
    const stepPassenger = () => setCurrentStep(2)

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
                    <li className={`flex items-center ${currentStep === 1 ? "text-blue-600" : ""}`}
                        onClick={stepTrip}
                    >
            <span
                className={`me-2 flex size-5 shrink-0 items-center justify-center rounded-full border ${currentStep === 1 ? "border-blue-600" : "border-gray-500"} text-xs dark:border-gray-400`}>
              <IoCar/>
            </span>
                        Trip <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
                        <svg className="ms-2 size-3 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                        </svg>
                    </li>
                    <li
                        onClick={stepPassenger}
                        className={`flex items-center ${currentStep === 2 ? "text-blue-600" : ""}`}>
            <span
                className={`me-2 flex size-5 shrink-0 items-center justify-center rounded-full border ${currentStep === 2 ? "border-blue-600" : "border-gray-500"} text-xs dark:border-gray-400`}>
              <IoPersonCircleSharp/>
            </span>
                        Personal <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
                        <svg className="ms-2 size-3 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                        </svg>
                    </li>
                    <li
                        className={`flex items-center ${currentStep === 3 ? "text-blue-600" : ""}`}>
            <span
                className={`me-2 flex size-5 shrink-0 items-center justify-center rounded-full border ${currentStep === 3 ? "border-blue-600" : "border-gray-500"} text-xs dark:border-gray-400`}>
              <HiShoppingCart/>
            </span>
                        Review & Pay
                    </li>
                </ol>

                {/* Step 1: Trip Info */}
                {currentStep === 1 && (
                    <form className="space-y-4" onSubmit={nextStep}>
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Trip Details
                            for {date}</h2>
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
                            <Label htmlFor="pickup">Pick Up Location</Label>
                            <Select
                                value={tripDetails.pickup}
                                onChange={(e) => handleTripDetailsChange('pickup', e.target.value)}
                                id="pickup" className="w-full" aria-label="Select pick up location">
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
                            <Label htmlFor="dropoff">Drop Off Location</Label>
                            <Select
                                value={tripDetails.dropoff}
                                onChange={(e) => handleTripDetailsChange('dropoff', e.target.value)}
                                id="dropoff" className="w-full" aria-label="Select drop off location">
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
                            <IoPersonCircleSharp className="mr-2 size-5"/> Personal Info <HiChevronDoubleRight
                            className="ml-2 size-5"/>
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
                                <HiChevronDoubleLeft className="mr-2 size-5"/> Trip Info <IoCar
                                className="ml-2 size-5"/>
                            </Button>
                            <Button type="submit" className="bg-blue-700 hover:bg-blue-800">
                                <HiShoppingCart className="mr-2 size-5"/> Review & Pay <HiChevronDoubleRight
                                className="ml-2 size-5"/>
                            </Button>
                        </div>
                    </form>
                )}

                {/* Step 3: Review & Pay */}
                {currentStep === 3 && (
                    <div className="space-y-4">
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Review & Pay</h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="max-w-full grow space-y-2">
                                <div className="flex max-w-full flex-row text-gray-700 dark:text-gray-300">
                                    <IoCar className="mr-2 mt-0.5 size-5"/> <strong>Trip Summary</strong>
                                </div>
                                <dl className="max-w-md divide-y divide-gray-200 rounded-2xl border border-gray-200 p-4 text-gray-900 shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                    <div className="flex flex-col pb-3">
                                        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Pick Up</dt>
                                        <dd className="text-lg font-semibold">{tripDetails.pickup}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Drop Off</dt>
                                        <dd className="text-lg font-semibold">{tripDetails.dropoff}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col pt-3">
                                        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Date</dt>
                                        <dd className="text-lg font-semibold">{date}</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="max-w-full grow space-y-2">

                                <div className="flex max-w-full flex-row text-gray-700 dark:text-gray-300">
                                    <IoPersonCircleSharp className="mr-2 mt-0.5 size-5"/> <strong>Passenger
                                    Details</strong>
                                </div>
                                <dl className="max-w-md divide-y divide-gray-200 rounded-2xl border border-gray-200 p-4 text-gray-900 shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                    <div className="flex flex-col pb-3">
                                        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Name</dt>
                                        <dd className="text-lg font-semibold">{personalInfo.firstName} {personalInfo.lastName}</dd>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Phone Number
                                        </dt>
                                        <dd className="text-lg font-semibold">{personalInfo.phone}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col pt-3">
                                        <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Email</dt>
                                        <dd className="text-lg font-semibold">{personalInfo.email}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>
                        <div className="flex max-w-full flex-row text-gray-700 dark:text-gray-300">
                            <IoCard className="mr-2 mt-0.5 size-5"/> <strong>Payment</strong>
                        </div>
                        <div
                            className="mt-6 rounded-2xl border border-gray-200 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                            <div className="flex flex-row pt-3 space-x-6 mb-2">
                                <div>
                                    <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Fare</dt>
                                    <dd className="text-lg font-semibold">$39.00</dd>
                                </div>
                                <div>
                                    <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">HST</dt>
                                    <dd className="text-lg font-semibold">$5.07</dd>
                                </div>
                                <div>
                                    <dt className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">Total</dt>
                                    <dd className="text-lg font-semibold">$44.07</dd>
                                </div>
                            </div>

                            <Label htmlFor="card-element">Enter your payment details:</Label>
                            <Elements stripe={stripePromise}>
                                {/*<CheckoutForm />*/}
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
                                <HiChevronDoubleLeft className="mr-2 size-5"/> Personal Info
                            </Button>
                            <Button
                                type="button"
                                onClick={handlePayment}
                                className="bg-green-600 hover:bg-green-700"
                            >
                                <HiShoppingCart className="mr-2 size-5"/> Complete Booking
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
            <IoShieldCheckmark className="fixed bottom-4 right-4 text-3xl text-green-500"/>

        </>
    );
}

export default RideBookingForm;