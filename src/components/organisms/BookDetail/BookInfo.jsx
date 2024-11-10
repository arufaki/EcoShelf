import { Star } from "lucide-react";
import { useAppContext } from "../../../context/AppContext";
import bookInfo from "../../../utils/bookInfo";

const BookInfo = () => {
    const { reviews } = useAppContext();

    const totalRating = reviews.map((review) => review.rating);
    const totalStar = totalRating.reduce((acc, rating) => acc + rating, 0);
    const averageRating = Math.round(totalStar / totalRating.length);

    const date = new Date(bookInfo.informationBook.publishedDate);

    const formatDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const languageConvert = {
        en: "English",
        id: "Indonesian",
    };

    return (
        <section className="hero py-14 border-b">
            <div className="hero-content flex-col lg:flex-row gap-16 items-center lg:items-start">
                <img src={bookInfo.thumbnail} className="max-w-96 sm:max-w-sm md:max-w-md lg:max-w-lg w-48 text-center" />
                <div className="max-w-[40rem]">
                    <h1 className="text-4xl font-bold text-green-700 font-poppins">{bookInfo.title}</h1>
                    <h5 className="text-green-900 my-2 font-poppins">by {bookInfo.author.join(", ")}</h5>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="flex flex-row gap-1">
                            {[...Array(averageRating)].map((_, index) => (
                                <Star key={index} fill="green" stroke="green" />
                            ))}
                            {[...Array(5 - totalRating.length)].map((_, index) => (
                                <Star key={index} stroke="green" />
                            ))}
                        </div>
                        <p className="text-green-900 font-poppins">({reviews.length} reviews)</p>
                    </div>
                    <div className="my-5">
                        <h3 className="text-xl font-semibold text-green-700 font-poppins">Book Information</h3>
                        <div className="max-w-96">
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Publisher:</h6>
                                <p>{bookInfo.informationBook.publisher}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Published Date:</h6>
                                <p>{formatDate}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Pages:</h6>
                                <p>{bookInfo.informationBook.pages}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>Language:</h6>
                                <p>{languageConvert[bookInfo.informationBook.language]}</p>
                            </div>
                            <div className="flex flex-row justify-between my-3 text-green-700 font-poppins">
                                <h6>ISBN:</h6>
                                <p>{`${bookInfo.informationBook.isbn.substring(0, 3)}-${bookInfo.informationBook.isbn.substring(3, 4)}-${bookInfo.informationBook.isbn.substring(
                                    4,
                                    6,
                                )}-${bookInfo.informationBook.isbn.substring(6, 12)}-${bookInfo.informationBook.isbn.substring(12)}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <button className="btn btn-success text-white font-poppins">Add to Reading List</button>
                        <button className="btn btn-outline btn-success outline-none hover:!text-white font-poppins">Review this Book</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookInfo;
