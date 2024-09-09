import MyNavbar from '../components/Navbar';
import ReviewCarousel from "../components/ReviewCarousel"; // Import your reviews JSON data
import BookingComponent from "../components/Booking";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer"
import { IoShieldCheckmark } from "react-icons/io5";

function Home() {

    return (
        <>
            <MyNavbar/>
            <h2 className="mx-8 mt-4 text-center text-2xl font-semibold text-gray-900 dark:text-white">
                Daily Ride Service Between Toronto and Kingston
            </h2>
            <div className="mx-8 mt-2 px-4 text-center">
                <span className="font-semibold text-gray-400">
                    Pearson Airport, Scarborough Town Centre, and Yorkdale Mall!
                </span>
            </div>
            <BookingComponent/>
            <div className="mx-auto mt-2 px-4 text-center">
                <span className="font-semibold uppercase text-gray-400">Trusted by over 4,700 passengers</span>
            </div>
            <ReviewCarousel/>

            <hr className="m-4 border-gray-300 dark:border-gray-700 md:mx-64"/>
            <div className="mx-auto px-4 pb-8 pt-4 text-center">
                <h2 className="text-xl font-semibold text-black dark:text-white">Frequently Asked Questions</h2>
            </div>
            <Accordion/>

                <div className="p-8">
                    <figure>
                <img className="m-4 mx-auto h-auto max-w-full rounded-3xl" src="/fleet.jpeg"
                     alt="image description"/>
                        <figcaption className="text-center text-gray-400 lg:mx-80">Meet Our Fleet! Our vehicles are regularly maintained. We maintain ample ventilation and encourage social distancing wherever possible. Rest assured, your health and safety are our top priorities as we strive to provide you with a reliable and enjoyable travel experience.</figcaption>
                    </figure>
                </div>



            <Footer/>

            {/*<DarkThemeToggle className="fixed bottom-4 left-4 bg-white rounded-lg p-4"/>*/}
            <IoShieldCheckmark className="fixed bottom-4 right-4 text-3xl text-green-500"/>

        </>

    );
}

export default Home;
