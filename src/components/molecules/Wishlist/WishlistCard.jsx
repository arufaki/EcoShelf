import { Bookmark } from "lucide-react";
import { truncateText } from "../../../utils/function/truncateText";
import { Link } from "react-router-dom";
import useWishlist from "../../../hooks/useWishlist";
import BookModal from "../Modal/BookModal";
import { Toast } from "../../../utils/function/toast";

const WishlistCard = ({ book }) => {
    const { toggleWishlist, isWishlisted } = useWishlist(book, Toast);

    return (
        <div className="border border-green-500 max-w-80 px-5 py-4 mx-auto rounded-2xl h-[500px] flex flex-col justify-between">
            <div>
                <h3 className="text-green-800 font-poppins font-semibold text-xl mb-1 hover:underline cursor-pointer">
                    <Link to={`/book/${book.id}`} state={book}>
                        {truncateText(book.volumeInfo.title, 5)}
                    </Link>
                </h3>
                <figure className="w-full h-60 mx-auto cursor-pointer">
                    <Link to={`/book/${book.id}`} state={book}>
                        <img className="object-cover w-full h-full align mx-auto rounded-md object-left-top" src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover" />
                    </Link>
                </figure>
                <p className="text-green-700 mt-1 font-poppins">
                    {Array.isArray(book.volumeInfo?.authors) && book.volumeInfo.authors.length > 0 ? truncateText(book.volumeInfo.authors[0], 4) : "author not found"}
                </p>
                <p className="py-2 font-poppins text-green-950">{truncateText(book.volumeInfo?.description || "Synopsis Not Found", 10)}</p>
            </div>
            <div className="flex flex-row justify-between">
                <BookModal book={book} disableButton={true} />
                <Bookmark size={36} className="cursor-pointer" stroke="green" onClick={() => toggleWishlist(book)} fill={isWishlisted ? "green" : "none"} />
            </div>
        </div>
    );
};

export default WishlistCard;
