import Header from "../components/organisms/Reusable/Header";
import Footer from "../components/organisms/Reusable/Footer";
import Main from "../layouts/Main";
import BookInfo from "../components/organisms/BookDetail/BookInfo";
import BookSynopsis from "../components/organisms/BookDetail/BookSynopsis";
import BookReviews from "../components/organisms/BookDetail/BookReviews";
import { useLocation, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const BookDetailPage = () => {
    const location = useLocation();
    const bookState = location.state;
    const { books } = useAppContext();
    const { id } = useParams();
    const book = bookState || books.find((b) => b.id == id);
    return (
        <>
            <Header />
            <Main className="max-w-[1440px] mx-auto">
                {!book ? (
                    <p>Not Found Book</p>
                ) : (
                    <>
                        <BookInfo book={book} />
                        <BookSynopsis book={book} />
                        <BookReviews title="Reader Reviews" userProfile={false} book={book} />
                    </>
                )}
            </Main>
            <Footer />
        </>
    );
};

export default BookDetailPage;
