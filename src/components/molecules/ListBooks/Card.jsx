import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
    return (
        <div className="card w-[200px] border border-green-500">
            <figure className="p-4 cursor-pointer">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" className="object-cover w-full h-60 rounded-md" />
            </figure>
            <div className="card-body p-2 flex flex-row items-center">
                <Link to={`/book/${book.id}`} state={book} className="btn btn-success text-white flex-1">
                    View
                </Link>
                <Bookmark size={32} className="cursor-pointer" stroke="green" />
            </div>
        </div>
    );
};

export default Card;
