import MyNavbar from '../components/Navbar';
import ReviewCarousel from "../components/ReviewCarousel"; // Import your reviews JSON data
import BookingComponent from "../components/Booking";

function Home() {

    return (
        <div>
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

            {/*<DarkThemeToggle className="fixed bottom-4 left-4 bg-white rounded-lg p-4"/>*/}
            {/*<IoShieldCheckmark className="fixed bottom-4 right-4 text-3xl text-green-500"/>*/}

        </div>

    );
}

export default Home;
