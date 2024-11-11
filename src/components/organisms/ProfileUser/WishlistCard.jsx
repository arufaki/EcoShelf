import bookInfo from "../../../utils/bookInfo";
import { truncateText } from "../../../utils/function/truncateText";

const WishlistCard = () => {
    return (
        <section className="py-10 px-5">
            <h1 className="text-lg font-bold text-green-700 font-poppins tracking-wide pb-5">Book Wishlist</h1>
            <div className="border border-green-500 max-w-80 px-5 py-4 mx-auto rounded-2xl">
                <h3 className="text-green-800 font-poppins font-semibold text-xl mb-1 ">{bookInfo.title}</h3>
                <figure className="w-full h-48 mx-auto ">
                    <img className="object-cover w-full h-full align mx-auto rounded-md object-left-top" src={bookInfo.thumbnail} alt="book-cover" />
                </figure>
                <p className="text-green-700 mt-1 font-poppins">{bookInfo.author.slice(0, 3).join(", ")}</p>
                <p className="py-2 font-poppins text-green-950">{truncateText(bookInfo.synopsis, 10)}</p>
                <button className="btn btn-success text-white">Review Book</button>
            </div>
        </section>
    );
};

export default WishlistCard;
