import bookInfo from "../../../utils/bookInfo";

const BookSynopsis = () => {
    return (
        <section className="py-10 border-b px-5">
            <h1 className="text-4xl font-bold text-green-700 pb-5 font-poppins">Synopsis</h1>
            <div className="hero">
                <p className="text-lg text-green-600 py-3 font-poppins">{bookInfo.synopsis}</p>
            </div>
        </section>
    );
};

export default BookSynopsis;
