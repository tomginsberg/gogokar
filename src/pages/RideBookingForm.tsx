"use client";

import React from "react";
import {Label, Select, TextInput, Button, Textarea, Datepicker} from "flowbite-react";
import {HiOutlineSwitchHorizontal, HiShoppingCart} from "react-icons/hi";
import {useLocation} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";
import Navbar from "../components/Navbar";


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
    // set the date picker value to the date
    console.log(date);
    // document.getElementById("departure-date")?.setAttribute("value", date);

    return (
        <div>
            <Navbar/>
            <div className="mx-auto max-w-md rounded-lg bg-white px-6 pb-16 dark:bg-gray-800">
                <h2 className="mb-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                    Book Your Ride on {date}
                </h2>

                <div className="mb-4 flex items-center justify-between">
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-xs text-gray-600">from</p>
                        <p className="text-lg font-semibold text-blue-700">{fromCity}</p>

                    </div>
                    <HiOutlineSwitchHorizontal
                        // onClick={toggleCities}
                        className="cursor-pointer
                        text-2xl text-gray-500 hover:text-green-400"
                    />
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-xs text-gray-600">to</p>
                        <p className="text-lg font-semibold text-blue-700">{toCity}</p>
                    </div>
                </div>


                <form className="space-y-4">
                    <hr className="my-4 border-gray-300 dark:border-gray-700"/>
                    <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Trip Details</h2>

                    {/* Pickup Location */}
                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="pickup">Pick-Up Location</Label></div>
                        <Select id="pickup" className="w-full" aria-label="Select pick-up location">
                            <option value={fromCity}>{fromCity}</option>
                            <option value={toCity}>{toCity}</option>
                        </Select>
                    </div>

                    {/* Drop-Off Location */}
                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="dropoff">Drop-Off Location</Label></div>
                        <Select id="dropoff" className="w-full" aria-label="Select drop-off location">
                            <option value={toCity}>{toCity}</option>
                            <option value={fromCity}>{fromCity}</option>
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
                        <TextInput id="phone" type="tel" placeholder="Enter phone number" required className="w-full"/>

                    </div>

                    <div>
                        <div className="mb-2 ml-1 block"><Label htmlFor="email">Email Address</Label></div>
                        <TextInput id="email" type="email" placeholder="Enter email address" required
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
        </div>
    );
};

export default RideBookingForm;