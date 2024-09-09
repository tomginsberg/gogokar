// contact page
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoShieldCheckmark } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import {Label, TextInput, Button, Textarea} from "flowbite-react";


function Contact() {
    return (
        <>
            <Navbar/>
            <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 pb-16 dark:bg-gray-800">
                <h2 className="mb-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <hr className="my-4 border-gray-300 dark:border-gray-700"/>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <TextInput icon={HiMail} id="email" type="email" className="w-full" aria-label="Enter your email"/>
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" className="w-full" aria-label="Enter your message"/>
                    </div>
                    <hr className="mb-4 border-gray-300 dark:border-gray-700"/>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800">Send</Button>
                </form>
            </div>
            <Footer/>
            <IoShieldCheckmark className="fixed bottom-4 right-4 text-3xl text-green-500"/>
        </>
    );
}

export default Contact;

