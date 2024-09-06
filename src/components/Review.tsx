"use client";

import {Avatar, Blockquote, Rating} from 'flowbite-react';

interface ReviewProps {
    review: {
        image: string;
        trip: string;
        name: string;
        review: string;
    };
}

export function Review({review}: ReviewProps) {
    return (
            <figure className="mx-auto flex max-w-screen-md flex-col items-center p-4 text-center">
                <div className="mb-4 flex items-center">
                    <Rating size="md">
                        <Rating.Star/>
                        <Rating.Star/>
                        <Rating.Star/>
                        <Rating.Star/>
                        <Rating.Star/>
                    </Rating>
                </div>
                <Blockquote>
                    <p className="line-clamp-3 text-2xl font-semibold text-gray-900 dark:text-white">
                        {review.review}
                    </p>
                </Blockquote>
                <figcaption className="mt-6 flex items-center space-x-3">
                    <Avatar rounded size="xs" img={review.image} alt="profile picture"/>
                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                            {review.name}
                        </cite>
                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                            {review.trip}
                        </cite>
                    </div>
                </figcaption>
            </figure>
            );
            }

            export default Review;