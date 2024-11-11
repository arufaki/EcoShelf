import { Bookmark } from "lucide-react";

const Card = ({ book }) => {
    return (
        <div className="card w-[200px] border border-green-500">
            <figure className="p-4 cursor-pointer">
                <img src={book.imageLinks.thumbnail} alt="Book Cover" className="object-cover w-full h-60 rounded-md" />
            </figure>
            <div className="card-body p-2 flex flex-row items-center">
                <button className="btn btn-success text-white flex-1">View</button>
                <Bookmark size={32} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Card;
