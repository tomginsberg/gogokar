import Navbar from "../components/Navbar";
import {Accordion} from "flowbite-react";
import Footer from "../components/Footer";

// policies page

function Policies() {
    return (
        <>
            <Navbar/>
            <Accordion className="mx-8 my-4 md:mx-64">
                <Accordion.Panel>
                    <Accordion.Title>Pickup Policies</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We offer pickup services from Pearson Airport, Scarborough Town Centre, and Yorkdale Mall.
                            Please make sure to be at the designated pickup location at least 15 minutes before the
                            scheduled departure time.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            If you have any questions or need assistance, please contact our customer service team at
                            (555) 555-5555.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Baggage Policies</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Each passenger is allowed to bring one carry-on bag and one personal item such as a purse or
                            backpack.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Additional baggage may be subject to an extra fee. Please contact our customer service team
                            for more information.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Drop-off Policies</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We offer drop-off services at Kingston Bus Terminal, Queen's University, and Downtown
                            Kingston.
                            Please make sure to have all your belongings with you before exiting the vehicle.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            If you have any questions or need assistance, please contact our customer service team at
                            (555) 555-5555.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Refund Policies</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            We offer full refunds for cancellations made at least 24 hours before the scheduled
                            departure
                            time.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            To request a refund, please contact fill out our contact form or contact our customer
                            service
                            team at (555) 555-5555.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        <Footer/>
        </>
    );
}

export default Policies;