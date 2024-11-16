import { Star } from "lucide-react";
import { useAppContext } from "../../../context/AppContext";
import dateFormatting from "../../../utils/function/dateFormat";
import languageConvert from "../../../utils/function/languageConvert";
import formatISBN from "../../../utils/function/identifier";
import useWishlist from "../../../hooks/useWishlist";
import BookModal from "../../molecules/Modal/BookModal";
import { Toast } from "../../../utils/function/toast";

const book = ({ book }) => {
    // Average Count Book Reviews
    const { user, reviews } = useAppContext();
    const totalRating = reviews.map((review) => review.rating);
    const totalStar = totalRating.reduce((acc, rating) => acc + rating, 0);
    const averageRating = Math.round(totalStar / totalRating.length) || 0;

    // Add Wishlist book from detail book
    const { toggleWishlist, isWishlisted } = useWishlist(book, Toast);

    return (
        <section className="hero py-14 border-b">
            <div className="hero-content flex-col lg:flex-row gap-16 items-center lg:items-start">
                <img src={book.volumeInfo.imageLinks.thumbnail} className="max-w-96 sm:max-w-sm md:max-w-md lg:max-w-lg w-48 text-center" />
                <div className="max-w-[40rem]">
                    <h1 className="text-4xl font-bold text-green-700 font-poppins">{book.volumeInfo.title}</h1>
                    <h5 className="text-green-900 my-2 font-poppins">
                        by {book.volumeInfo.authors?.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors?.[0] || "Unknown Author"}
                    </h5>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex flex-row gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} fill={index < averageRating ? "green" : "none"} stroke="green" />
                            ))}
                        </div>
                        <p className="text-green-900 font-poppins">({reviews.length} reviews)</p>
                    </div>
                    <div className="my-5">
                        <h3 className="text-xl font-semibold text-green-700 font-poppins">Book Information</h3>
                        <div className="max-w-96">
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Publisher:</h6>
                                <p>{book.volumeInfo.publisher}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Published Date:</h6>
                                <p>{dateFormatting(book.volumeInfo.publishedDate)}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Pages:</h6>
                                <p>{book.volumeInfo.pageCount}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Language:</h6>
                                <p>{languageConvert[book.volumeInfo.language]}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>ISBN:</h6>
                                <p>{formatISBN(book.volumeInfo.industryIdentifiers?.[0]?.identifier)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <button className="btn btn-success text-white font-poppins" onClick={() => toggleWishlist(book)}>
                            {isWishlisted ? "Remove Book from Wishlist" : "Add to Reading List"}
                        </button>
                        <BookModal book={book} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default book;
