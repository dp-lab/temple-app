import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const RatingAndReview = () => {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    useEffect(() => {
        // Fetch all the present reviews and ratings from the API
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get("/api/ratings-and-reviews");
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleSubmit = async () => {
        try {
            const newReview = { rating, reviewText };

            // Save the new review to the server
            const response = await axios.post("/api/ratings-and-reviews", newReview);

            // Update the local state with the new review
            setReviews([...reviews, response.data]);

            // Clear the review text and rating after submitting
            setRating(0);
            setReviewText("");
        } catch (error) {
            console.error("Error saving rating and review:", error);
        }
    };

    return (
        <div className="rating-and-review-container">
            <div className="rating-and-review-section">
                <h4>Please Rate and Review</h4>
                <Rating
                    initialRating={rating}
                    onChange={handleRatingChange}
                    emptySymbol={<FontAwesomeIcon icon={regularStar} className="star-icon" />}
                    fullSymbol={<FontAwesomeIcon icon={solidStar} className="star-icon" />}
                />
                <div className="review-text-container">
                    <textarea
                        className="review-textarea"
                        value={reviewText}
                        onChange={handleReviewTextChange}
                        placeholder="Write your review..."
                    />
                </div>
                <Button onClick={handleSubmit} variant="outline-success" type="submit">
                    Submit
                </Button>
            </div>

            {/* Display all the present reviews */}
            <div className="reviews-column">
                <h4>All Reviews</h4>
                {reviews.map((review, index) => (
                    <div key={index} className="single-review">
                        <Rating
                            initialRating={review.rating}
                            emptySymbol={<FontAwesomeIcon icon={regularStar} className="star-icon" />}
                            fullSymbol={<FontAwesomeIcon icon={solidStar} className="star-icon" />}
                            readonly
                        />
                        <p>{review.reviewText}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RatingAndReview;