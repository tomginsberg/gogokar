// contact page
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <Navbar/>
            <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 pb-16 dark:bg-gray-800">
                <h2 className="mb-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <div className="mb-4 flex items-center justify-between">
                    <div className="w-20 shrink-0 text-center"> {/* Fixed width for consistency */}
                        <p className="text-xs text-gray-600">Email</p>
                    </div>
                </div>
                <hr className="my-4 border-gray-300 dark:border-gray-700"/>
                <form className="space-y-4">
                    <div>
                        <div className="mb-2 ml-1 block"><label htmlFor="email">Email</label></div>
                        <input id="email" className="w-full" aria-label="Enter your email"/>
                    </div>
                    <div>
                        <div className="mb-2 ml-1 block"><label htmlFor="message">Message</label></div>
                        <textarea id="message" className="w-full" aria-label="Enter your message"/>
                    </div>
                    <hr className="mb-4 border-gray-300 dark:border-gray-700"/>
                    <button className="w-full bg-blue-700 hover:bg-blue-800">Send</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;

