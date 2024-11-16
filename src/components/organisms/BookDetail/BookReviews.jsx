import { Star } from "lucide-react";
import { useAppContext } from "../../../context/AppContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookReviews = ({ title, userProfile, book, filterByUser = false }) => {
    const { user, reviews, fetchReviewsBook, deleteReview } = useAppContext();
    const [displayedCount, setDisplayedCount] = useState(3);

    useEffect(() => {
        fetchReviewsBook(book, filterByUser ? user : null);
    }, [book, user, filterByUser]);

    const handleDelete = async (reviewId) => {
        await deleteReview(reviewId);
    };

    const loadMore = () => {
        setDisplayedCount(reviews.length);
    };

    const showLess = () => {
        setDisplayedCount(3);
    };

    return (
        <section>
            <div className="py-10 mx-auto px-5">
                <h1 className="text-lg font-bold text-green-700 font-poppins tracking-wide pb-5">{title}</h1>
                <h2 className="text-2xl font-bold mb-4"></h2>
                <div className="space-y-4">
                    {reviews.length > 0 ? (
                        reviews
                            .slice(0, displayedCount)
                            .reverse()
                            .map((review) => (
                                <div key={review.id} className="border border-green-500 bg-white rounded-lg p-4 shadow-md">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg font-poppins">{review.user_name.charAt(0)}</div>
                                            <div>
                                                <h3 className="font-semibold text-green-800 font-poppins">{review.user_name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 text-yellow-500">
                                            {[...Array(review.rating)].map((_, index) => (
                                                <Star key={index} fill="green" stroke="green" />
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, index) => (
                                                <Star key={index} stroke="green" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mt-2 px-12 font-poppins">{review.review}</p>
                                    {userProfile && (
                                        <button className="btn btn-outline btn-success outline-none hover:!text-white mx-12 my-2" onClick={() => handleDelete(review.id)}>
                                            Delete Review
                                        </button>
                                    )}
                                </div>
                            ))
                    ) : (
                        <p className="font-poppins">Reviews Not Found</p>
                    )}
                </div>
                {reviews.length > 3 && (
                    <div className="mt-4 flex justify-center">
                        {displayedCount < reviews.length ? (
                            <button className="btn btn-outline btn-success outline-none hover:!text-white mx-12 my-2" onClick={loadMore}>
                                Load More
                            </button>
                        ) : (
                            <button className="btn btn-success outline-none text-white hover:!text-white mx-12 my-2" onClick={showLess}>
                                Less Reviews
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BookReviews;
