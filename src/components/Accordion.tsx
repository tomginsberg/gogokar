"use client";

import {Accordion} from "flowbite-react";

export function Component() {
    return (
        <Accordion className="mx-8 my-4 md:mx-64">
            <Accordion.Panel>
                <Accordion.Title>What is your cancellation policy?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        We offer full refunds for cancellations made at least 24 hours before the scheduled departure
                        time.

                        See more details on our <a href={"/policies"}
                                                   className="text-cyan-600 hover:underline dark:text-cyan-500">Policies</a> page.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Where are the pickup and dropoff locations?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Info...
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Can you deliver parcels?</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes! We offer parcel delivery services between Toronto and Kingston. Please contact our customer
                        service team for more information.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}

export default Component;