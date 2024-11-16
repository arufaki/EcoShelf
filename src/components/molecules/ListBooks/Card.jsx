import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { truncateText } from "../../../utils/function/truncateText";
import useWishlist from "../../../hooks/useWishlist";
import { Toast } from "../../../utils/function/toast";

const Card = ({ book }) => {
    const { toggleWishlist, isWishlisted } = useWishlist(book, Toast);

    return (
        <div className="card w-[260px] h-[400px] border border-green-500">
            <figure className="pt-4 px-4 cursor-pointer">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" className="object-cover w-full h-60 rounded-md" />
            </figure>
            <div>
                <h3 className="text-green-800 font-poppins font-semibold text-sm pt-2 px-4 text-left">{truncateText(book.volumeInfo.title, 5)}</h3>
                <p className="px-4 text-xs text-left">
                    by {Array.isArray(book.volumeInfo?.authors) && book.volumeInfo.authors.length > 0 ? truncateText(book.volumeInfo.authors[0], 4) : "author not found"}
                </p>
            </div>
            <div className="card-body p-2 flex flex-row items-end">
                <Link to={`/book/${book.id}`} state={book} className="btn btn-success text-white flex-1">
                    View
                </Link>
                <Bookmark size={32} className="cursor-pointer" stroke="green" onClick={() => toggleWishlist(book)} fill={isWishlisted ? "green" : "none"} />
            </div>
        </div>
    );
};

export default Card;
