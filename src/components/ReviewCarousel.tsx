"use client";

import React, {useMemo} from 'react';
import { Carousel } from 'flowbite-react';
import Review from './Review';
import reviewsData from '../assets/reviews.json'; // Adjust the path according to your file structure

interface Review {
    image: string;
    trip: string;
    name: string;
    review: string;
}

const getRandomReviews = (reviews: Review[], count: number): Review[] => {
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const ReviewCarousel: React.FC = () => {
    const reviews = useMemo(() => getRandomReviews(reviewsData, 20), [reviewsData]);

    return (
        <div className="mt-8 w-full sm:h-60">
            <Carousel slideInterval={2000} indicators={false} className="h-full">
                {reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </Carousel>
        </div>
    );
};

export default ReviewCarousel;